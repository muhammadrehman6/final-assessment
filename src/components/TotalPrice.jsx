import React from 'react'
import { useSelector } from 'react-redux'

function TotalPrice() {
    
    const price = useSelector(state=>state.productReducer.totalPrice)
    console.log(price)
    const a = price.reduce((total , num)=>{
        return total + num
    } , 0)
  return (
    <div>
    <h2 className="mb-3">Total Price : $ {a}</h2>
    </div>
  )
}

export default TotalPrice