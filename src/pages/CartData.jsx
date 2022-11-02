import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteAllFromCart, deleteAllFromPrice, deleteFromCart, deleteFromPrice } from "../redux/actions/productActions";
import {  FaTrashAlt } from "react-icons/fa";
import TotalPrice from "../components/TotalPrice";




function CartData() {
  const state = useSelector((state) => state.productReducer.cart);
  const price = useSelector(state=>state.productReducer.totalPrice)
  console.log(price)
  const a = price.reduce((total , num)=>{
      return total + num
  } , 0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
      if (!localStorage.getItem('token')) {
        toast.error("Please Login first")
        navigate('/login')
      }
    }, [])
   
  
    const handleDeleteBtn = (items)=>{
      // console.log(id)
      dispatch(deleteFromCart(items.id))
      dispatch(deleteFromPrice(items.price))
      toast.success("Deleted from card successfully")
    }
    const showCartData = ()=>{
        return(
            <div className="row">
        {state.map((items) => (
          
          <>
         
            <div className="col-md-6 mt-4 ">
              <img src={items.image} alt="" height={"200px"}  className='scale' />
            </div>
            <div className="col-md-6 mt-4 ">
              
              <h2 className=" mt-4 float-start">{items.title}</h2>
              <p>
                <span className="fw-bold">Price : $</span> {items.price}
              </p>
              <button className="btn btn-outline-dark mb-2" onClick={()=>handleDeleteBtn(items)}>
                <FaTrashAlt />
              </button>
            </div>
            <hr />
          </>
        ))}
      </div>
        )
    }

    const showMessage = ()=>{
        return <span >Cart is empty</span>
    }
    const handleCheckOutBtn = ()=>{
      dispatch(deleteAllFromCart())
      dispatch(deleteAllFromPrice())
      toast.success("purchase complete")
      navigate('/')
    }
  return (
    <div className="container">
      {
       state.length? showCartData() : showMessage()
      }
      
      
      <div className="price_div float-end">
        <TotalPrice />
        <button className="btn btn-outline-dark mb-3" onClick={()=>handleCheckOutBtn()}>CheckOut</button>
      </div>
    </div>
  );
}

export default CartData;
