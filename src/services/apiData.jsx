import axios from "axios"

const getProductData = ()=>{
    return axios.get('https://fakestoreapi.com/products')
}

const getCategoryData = ()=>{
    return axios.get('https://fakestoreapi.com/products/categories')
}
export{getProductData , getCategoryData}