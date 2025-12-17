import React from 'react'
import "../assets/css/main.css"
import { Button } from "./Button"
import { Header } from "./Header";
import { Footer } from "./Footer";


export const Main = () => {
  return (
    <>
      
      <div className="container m-5">
        <div className="text-center p-5 rounded inside-div">
          <h2 className="text-primary">stoct-predection-app</h2>
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            suscipit iusto molestias, culpa deserunt alias quod autem delectus
            animi rem nostrum optio aliquam, praesentium commodi labore,
            molestiae sed. Repellendus, numquam?
          </p>
          <Button text="Login" cls="btn-primary" />
        </div>
      </div>
      
    </>
  );
}
