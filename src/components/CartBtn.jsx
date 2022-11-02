import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";

function CartBtn() {
    const state = useSelector(state=>state.productReducer.cart)
    const navigate = useNavigate()
  return (
    <div>
    <button className='btn btn-outline-dark mt-1' onClick={()=>navigate('/cart')}> <FaCartPlus />({state.length})</button>
    </div>
  )
}

export default CartBtn