import { useEffect } from "react";
import axios from "axios";
import axiosInstance from "../../axiosinstance";  //

export const Dashboard = () => { // when login then navigate to this component then automatic run useeffect then check console for output
  //   const access = localStorage.getItem("accessToken"); // it is a key we give

  useEffect(() => { 
    const fetchProtectedData = async () => {
      try {
        const res = await axiosInstance.get(
          "/protected-view/"  // this api is jwt protected from backend , that mean need access token 
          // {
          // headers: {                               // we sent this from axiosinstance.js
          //   Authorization: `Bearer ${access}`,  // we sent access token and acess in the protected-view , if access token expiery it give 401 error,then we handle it with axiox interceptor
          // },
          //   }
        );
  
        console.log("Protected Data==>", res.data);
      } catch (error) {
        console.error(
          "Error in fetching==>",
          error.response?.data || error.message
        );
      }
    };

    fetchProtectedData();
  }, []);

  return (
    <>
      <div className="text-light container">Dashboard</div>
    </>
  );
};

 