import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NotFound.module.css'
export const NotFound = ({message,linkRoute,linkText}) => {
  return (
    <div className={classes.contianer}>
        {message}
        <Link to={linkRoute}>{linkText}</Link>
    </div>
  )
}


NotFound.defaultProps={
    
    message:'Nothing Found!',
    linkRoute :'/',
    linkText:'Go To Home Page'
}