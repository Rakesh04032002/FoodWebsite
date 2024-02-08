import {useState,createContext,useContext} from "react";
import * as UserService from '../Services/UserService';
import {toast} from 'react-toastify';
const AuthContext =createContext(null);
export const AuthProvider=({children})=>{
    const [user,setUser]=useState(UserService.getUser());

    const login=async(email,password)=>{
        try{
            const user=await UserService.login(email,password);
            setUser(user);
            toast.success('Login Successful');
        }catch(err){
            toast.error(err.response.data);
        }
    }; 
    const register=async(data)=>{
        try{
            const user=await UserService.register(data);
            setUser(user);
            toast.success('Register Successful');
        }catch(err){
            toast.error(err.response.data);
        }
    }

    const logout=()=>{
        UserService.logout();
        setUser(null);
        toast.success('Logout Successful');
    };

    const updateProfile=async user=>{
        const updateUser=await UserService.updateProfile(user);
        toast.success('Profile update was successful');
        if(updateUser) setUser(updateUser);
    }

    const changePassword=async passwords=>{
        await UserService.changePassword(passwords);
        logout();
        toast.success('Password Changed Successfully,Please Login Again');
    };

    return(
        <AuthContext.Provider value={{user,login,logout,register,updateProfile,changePassword}}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth=()=>useContext(AuthContext);