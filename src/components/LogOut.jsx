import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


function LogOut() {
    const navigate = useNavigate()
    const handleLogOutBtn = ()=>{
        localStorage.removeItem('token')
        navigate('/login')
        toast.success("Logout successfully")
    }
  return (
    <div>
        <button className='btn btn-outline-dark me-2 mt-1' onClick={()=>handleLogOutBtn()}>Logout</button>
    </div>
  )
}

export default LogOut