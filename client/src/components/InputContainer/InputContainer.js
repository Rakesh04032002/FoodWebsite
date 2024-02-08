import classes from './InputContainer.module.css';

import React, { Children } from 'react'

export const InputContainer = ({label,bgColor,children}) => {
  return (
    <div className={classes.container} style={{backgroundColor:bgColor}}>
    <label className={classes.label}>{label}</label>
    <div className={classes.content}>{children}</div>
    </div>
  );
  }