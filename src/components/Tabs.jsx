import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { handleCategoryData, handleProductData } from "../ActionController";
import { FaCartPlus , FaTrashAlt } from "react-icons/fa";
import {
  addAllProducts,
  addPrice,
  addTOCart,
} from "../redux/actions/productActions";
import Pagination from "./Pagination";

function Tabs() {
  const [data, setData] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const searchData = useSelector((state) => state.productReducer.search);

  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const showProductData = async () => {
    try {
      
      const res = await handleProductData();
      dispatch(addAllProducts(res));
      setFilterData(res);
      setData(res);
    } catch (e) {
      console.log(e.message);
    }
  };

  const showCategoryData = async () => {
    try {
      const res = await handleCategoryData();
      setTabs(res);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    
    showProductData();

    showCategoryData();
  }, []);

  const handleCatgBtn = (catg) => {
    const fetch = data.filter((x) => {
      if (x.category === catg) {
        return x;
      }
    });
    return setFilterData(fetch);
  };

  const showTabs = () => {
    return (
      <div className="tabs_div">
        <button
          className="btn btn-outline-dark"
          onClick={() => setFilterData(data)}
        >
          All
        </button>
        {tabs.map((items) => (
          <button
            className="btn btn-outline-dark ms-2"
            onClick={() => handleCatgBtn(items)}
          >
            {items}
          </button>
        ))}
      </div>
    );
  };
  
  const handleDeleteBtn = (id) => {

    const a =filterData.filter((item)=> {return item.id!==id})
    setFilterData(a)
    toast.success("deleted successfully")
  };

  const handleAddBtn = (data) => {
    dispatch(addTOCart(data));
    dispatch(addPrice(data.price))
    navigate("/cart");
    toast.success("ADDED TO CART SUCCESSFULLY");
  };
  return (
    <div className="container">
      {showTabs()}
      <div className="row mt-5">
        {filterData
          .filter((val) => {
            console.log(val);
            if (searchData === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchData.toLowerCase())
            ) {
              return val;
            }
          })
          .map((items) => (
            <div className=" col-12 col-md-6 col-lg-3 mt-3 ">
              <div className="card p-2" key={items.id} >
                <img src={items.image} alt="" height={"200px"} className='scale'  />
                <div className="card-body">
                  <p>{items.title.substring(0, 12)}</p>
                  <p> price : ${items.price}</p>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => handleAddBtn(items)}
                  >
                    cart <FaCartPlus />
                  </button>
                  <button
                    className="btn btn-outline-dark ms-1"
                    onClick={() => handleDeleteBtn(items.id)}
                  >
                    Remove <FaTrashAlt />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      
      <Pagination />
    </div>
  );
}

export default Tabs;
