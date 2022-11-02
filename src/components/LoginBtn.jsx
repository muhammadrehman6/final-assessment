import React from 'react'
import { useNavigate } from 'react-router-dom'
import {  FaSignInAlt } from "react-icons/fa";

function LoginBtn() {
    const navigate = useNavigate()
  return (
    <div>
        <button className='btn btn-outline-dark me-2 mt-1' onClick={()=>navigate('/login')} ><FaSignInAlt /> Login</button>
    </div>
  )
}

export default LoginBtn