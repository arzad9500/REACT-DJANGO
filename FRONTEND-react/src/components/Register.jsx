import {useState} from 'react'
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Register = () => {

    const [username,setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({})
    const [success , setSuccess] = useState(false) 
    const [loading, setLoading] = useState(false)

    const handleRegistation =async (e) =>{
        e.preventDefault()
        setLoading(true)
        // console.log("test")

        const userdata = {username, email, password}
        // console.log("this is userdata in console",userdata)
        
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/v1/register/",userdata); // await is wait for backend response
      console.log("Response:", response.data);
      setError({})
      setSuccess(true)
    //   console.log("this is done")
       
    } catch (error) {
        setError(error.response.data)
      console.error("Error:",error.response?.data || error.message);
    }finally{
        setLoading(false)
    }

    }

  return (
    <>
    <div className="container" >
        <div className="row justify-content-center ">
            <div className="col-md-6 ">
                <h3 className="text-light text-center ">Create an Account</h3>
                <form action="" className='' onSubmit={handleRegistation}>
                    <div className='mb-3'>
                        <input type="text" className='form-control '  placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <small>{error.username && <div className='text-danger'>{error.username}</div> }</small>
                    </div>
                    <div className="mb-3">
                        <input type="email" className='form-control '  placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="password" className='form-control '  placeholder='Set password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <small>{error.password && <div className='text-danger'>{error.password}</div> }</small>
                    </div>
                    {success && <div className='alert alert-success'>Registration Success</div>}
                    {loading ? (
                        <button type='submit' className='btn btn-info d-block mx-auto' disabled> <FontAwesomeIcon icon={faSpinner} spin />pleace wait ...</button> // Prevents the button from being clicked
                    ) : 
                    <button type='submit' className='btn btn-info d-block mx-auto' >Register</button>
                    }
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
