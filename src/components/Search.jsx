import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../redux/actions/productActions'

function Search() {
    const dispatch = useDispatch()
  return (
    <div className=" container input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">Search</span>
  <input type="text" className="form-control" placeholder="search here..." aria-label="Username" aria-describedby="addon-wrapping" onChange={(e)=>dispatch(addSearch(e.target.value))}/>
</div>
  )
}

export default Search