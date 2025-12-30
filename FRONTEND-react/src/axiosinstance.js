import axios from "axios";

const base = import.meta.env.VITE_BACKEND_BASE_API  // from .env inside root folder
const axiosInstance = axios.create({
    baseURL :  base
})
 

// Request interseptor   // this setup can check in website 
axiosInstance.interceptors.request.use( // // check 7.17 for better understand
    function (config) {
        console.log("Request is ==>",config)
        const accessToken = localStorage.getItem("accessToken")
        if (accessToken){ // this line is inject the Authorization to the request
            config.headers["Authorization"] = `Bearer ${accessToken}`
        }
        console.log("config is ==>",config)  // here we can see the injection part from the config(request)
        return config;   // here it goes to the servor
  }, function (error){
    return Promise.reject(error);
  }

)

// Responce interceptor  // if doubt check GPT 
axiosInstance.interceptors.response.use(
    function (response){

        return response  // without error it goes to the frontend 
    },
    // handle failed response
    async function(error){
      const originalRequest = error.config; // What is error.config? // Contains the original API request // (URL ,method, headers, data) // coz We want to retry this same request later
      if (error.response.status == 401 && !originalRequest.retry) {
        // status == 401 --> Access token expired , !originalRequest.retry --> Prevent infinite loop
        // if token expior we got this error
        originalRequest.retry = true; // If refresh also fails: // Backend returns 401 again ,//  Without this flag → infinite loop  // ✔ Allows only ONE retry
        const refreshToken = localStorage.getItem("refreshToken"); // refreshToken is key
        try {
          const response = await axiosInstance.post("/token/refresh/", {
            refresh: refreshToken,
          }); // send refresh token to the backend
          console.log("new access token ==>", response.data.access); // then refresh token give new access token
          // console.log("response==>", response.data);
          localStorage.setItem("accessToken", response.data.access); // set the new access token to the local storage
          originalRequest.headers["Authorization"] = `Bearer ${response.data.accces}`; // Original request still has old expired token  // We replace it with new token
          return axiosInstance(originalRequest); // Same request is sent again // With new access token // Backend allows access // Response reaches frontend  //🔥 User never notices token expiry
        } catch (error) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        }
      }
      return Promise.reject(error);
    }
)





export default axiosInstance


