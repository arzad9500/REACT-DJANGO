import React from 'react'
import "../assets/css/header.css"
import { Button } from './Button'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <nav className="navbar container align-items-start mt-4">
        {/* <a href="" className='navbar-brand text-light'>Stock Predtion App</a> */}{" "}
        {/* instead of this down */}
        {/* instead of this down */}
        <Link to="/" className="navbar-brand text-light">
          Stock Predtion App
        </Link>
        <div className="">
          {/* here text and cls is naming convension */}
          <Button text="Login" cls="btn-outline-info" url="/login" />
          &nbsp;
          <Button text="Register" cls="btn-primary" url="/register" />
        </div>
      </nav>
    </>
  );
}
