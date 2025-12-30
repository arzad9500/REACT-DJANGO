import React from 'react'
import "../assets/css/header.css"
import { Button } from './Button'
import { Link } from 'react-router-dom'
import { AuthContext } from './AuthProvider'  //
import { useContext } from 'react'            // 
import { useNavigate } from 'react-router-dom'

export const Header = () => {

  const {isLoggedin, setIsLoggedin} = useContext(AuthContext)// // this is from Auth provider
  const navigate = useNavigate  

  const handleLogout = () =>{
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    console.log('loggedd out')
    setIsLoggedin(false)
    navigate("/login")  // after logout it goes to login page
  }

  return (
    <>
      <nav className="navbar container align-items-start mt-4">
        {/* <a href="" className='navbar-brand text-light'>Stock Predtion App</a> */}{" "}
        {/* instead of this down */}
        {/* instead of this down */}
        <Link to="/" className="navbar-brand text-light">Stock Predtion App</Link>

          {/* here text and cls is naming convension */}
        <div className="">
          {isLoggedin ? ( /* if we log in we can see the logout button , dashboard also*/
          <>
            <Button text="Dashboard" cls="btn-primary" url="/dashboard" />
            &nbsp;
            <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
          </>
          ): (
            // down this empty fragemet for else part no need two  element
            <> 
              <Button text="Login" cls="btn-outline-info" url="/login" />
              &nbsp;
              <Button text="Register" cls="btn-primary" url="/register" />
            </>
          )}
        </div>
      </nav>
    </>
  );
}
