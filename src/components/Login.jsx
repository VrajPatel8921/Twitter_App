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
    <div className="flex items-center justify-center w-full min-h-screen bg-black">
      <div className="mx-auto w-full max-w-lg bg-[#16181c] rounded-xl p-10 border border-white/10 shadow-xl">
        <div className="mb-4 flex justify-center">
          <span className="inline-block w-full max-w-[60px]">
            <Logo className="w-full" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold text-white">Sign in to X</h2>
        <p className="mt-2 text-center text-base text-white/60">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-blue-500 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-500 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            {error.email && (
              <p className="text-red-500 text-sm">{error.email.message}</p>
            )}
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {error.password && (
              <p className="text-red-500 text-sm">{error.password.message}</p>
            )}
            <Button type="submit">Sign in</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login