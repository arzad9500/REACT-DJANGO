import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";  // inside we will provide isLoggedin and setIsLoggedin


export const Login = () => {

    const [username,setUsername] = useState("")
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate() // take navigate and store into navigate variable
    const [error, setError] = useState("");
    const {isLoggedin, setIsLoggedin} = useContext(AuthContext)// // this is from Auth provider 
    

    const handleLogin = async (e) => {
      e.preventDefault();
        setLoading(true)

      const userdata = { username, password };
      console.log("userdata ==>",userdata)

    try {
      // if same username and password is available(same) it give access and refresh token , same 
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/token/",
        userdata
      ); // await is wait for backend response
      localStorage.setItem("accessToken", response.data.access); // accessToken is key and response.data.access is from backend responseand and save that in local storage
      localStorage.setItem("refreshToken", response.data.refresh);
      console.log("Response==>", response.data);
      setIsLoggedin(true);
      navigate("/"); // home page route
    } catch (error) {
        console.error("invalid credentials"); // console.error is show red color 
        setError("invalid credentials");
    }finally{
        setLoading(false)
    }

    };

  return (
    <>
    <div className="container" >
        <div className="row justify-content-center ">
            <div className="col-md-6 ">
                <h3 className="text-light text-center ">Login  Account</h3>
                <form action="" className='' onSubmit={handleLogin}>
                    <div className='mb-3'>
                        <input type="text" className='form-control '  placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className='form-control '  placeholder='Set password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {/* <small>{error.detail && <div className='text-danger'>{error.detail}</div> }</small> */}
                    {error  && <div className="text-danger">{error}</div>}
                    {loading ? (
                        <button type='submit' className='btn btn-info d-block mx-auto' disabled> <FontAwesomeIcon icon={faSpinner} spin />pleace wait ...</button> // Prevents the button from being clicked
                    ) : 
                    <button type='submit' className='btn btn-info d-block mx-auto' >Login</button>
                    } 
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
