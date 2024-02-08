import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form';
import {useNavigate,useSearchParams,Link} from 'react-router-dom';
import {useAuth} from '../../Hooks/useAuth';
import classes from './LoginPage.module.css';
import Input from '../../components/Input/Input';
import { Title } from '../../components/Title/Title';
import { Button } from '../../components/Button/Button';

export const LoginPage = () => {
  const{
    handleSubmit,
    register,
    formState:{errors},
  }=useForm();
  const navigate=useNavigate();
  const {user,login}=useAuth();
  const [params]=useSearchParams();
  const returnUrl=params.get('returnUrl');

  useEffect(() => {
    // Check if user has changed (assuming user is an object)
    if (!user || (user && user.id !== undefined)) {
      return;
    }

    returnUrl ? navigate(returnUrl) : navigate('/');
  }, [user, navigate, returnUrl]);

  const submit = async ({ email, password }) => {
    try {
      await login(email, password);
      // If login is successful, the user should be redirected to the home page.
    } catch (error) {
      // Handle login failure, show error messages, etc.
      console.error('Login failed:', error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.details}>
      <Title title='Login'/>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <Input type="email"
        label="Email"
        {...register('email',{required:true,pattern:{
          value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
                message: 'Email Is Not Valid',
        },})}
        error={errors.email}
        />
        <Input type="password"
        label="Password" 
        {...register('password',{required:true,})}
        error={errors.password}
        />
        <Button type="submit" text="Login"/>
        <div className={classes.register}>
          New user?&nbsp;
          <Link to={`/register${returnUrl?'?returnUrl='+returnUrl:''}`}>
          Register here
          </Link>
        </div>
      </form>
      </div>
    </div>
  )
}
