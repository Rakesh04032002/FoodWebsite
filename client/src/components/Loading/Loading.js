import React from 'react'
import { useLoading } from '../../Hooks/useLoading'
import classes from './Loading.module.css'
export const Loading = () => {
    const {isLoading}=useLoading();
    if(!isLoading) return;
  return (
    <div className={classes.container}>
        <div className={classes.items}>
            <img src='/loading.gif' alt='Loading!'/>
            <h1>Loading...</h1>
        </div>
    </div>
  )
}
