import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = ()=>{
        axios.post('https://reqres.in/api/login' , {
            email : email,
            password : password
        }).then((result)=>{
            console.log(result.data)
            localStorage.setItem('token' , result.data.token)
            toast.success("successfully Login")
            navigate('/')
        }).catch(err=>{
            console.log(err)
            alert("Please Enter Valid Email and Password")
        })
    }
  return (
    <div className="login_form border-1">
    <h1 className='login_h1'>Login page</h1>
    <input type="text" className='form-control' placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)} /><br />
    <input type="text" className='form-control'  placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />  <br />
    <button className=" btn btn-primary login_btn" onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login