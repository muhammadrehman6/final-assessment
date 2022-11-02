import React, { useEffect } from 'react'
import Tabs from '../components/Tabs'
import Search from '../components/Search'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function Home() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      toast.error("please Login first")
      navigate('/login')
    }
  }, [])
  return (
    <div>
    <Search />
    <Tabs />
    </div>
  )
}

export default Home