import React from 'react'
import { Link } from 'react-router-dom'

export const Button = (props) => {
  return (
    <>
        <Link to={props.url} className={`btn ${props.cls}`}>{props.text}</Link>
    </>
  )
}
