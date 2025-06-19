import React , {use, useState}from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button,Input,Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
 

const Login = () => {
    const nevigate=useNavigate();
    const dispatch = useDispatch();
    const { register,handleSubmit }=useForm();
    const [error, setError] = useState(null);

    const login=async (data)=>{
        setError(null);
        try{
            const session=await authService.login(data);
            if(session){
                const userData= await authService.getUser();
                if(userData){
                    dispatch(authLogin(userData));
                    nevigate('/');
                }
            }
        }catch(error){
            setError(error.message);
        }
    }

  return (
    <div>Login</div>
  )
}

export default Login