import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'

const LogoutBtn = () => {
    const dispatch=useDispatch();
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout());
        })
    }
  return (
   <button
    className='inline-block px-4 py-2 hover:bg-gray-800 rounded-full transition'
    onClick={logoutHandler}
   >Logout</button>
  )
}

export default LogoutBtn