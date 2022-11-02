const addAllProducts = (products)=>{
    return {
        type : 'ALL_PRODUCTS',
        payload  : products
    }
}
const deleteProduct = (id)=>{
    return {
        type : 'DELETE_PRODUCT',
        id
    }
}
const addTOCart = (data)=>{
    return {
        type : 'ADD_CART',
        payload : data
    }
}
const deleteFromCart = (id)=>{
    return {
        type : 'DELETE_CART',
        id
    }
}
const deleteAllFromCart = ()=>{
    return {
        type : 'DELETE_ALL',
        
    }
}
const addSearch = (data)=>{
    return {
        type : 'SEARCH',
        payload : data
    }
}

const addPrice = (data)=>{
    return {
        type : 'ADD_PRICE',
        payload : data
    }
}
const deleteFromPrice = (price)=>{
    return {
        type : 'DELETE_PRICE',
        price
    }
}
const deleteAllFromPrice = ()=>{
    return {
        type : 'DELETE_ALL_PRICE',
        
    }
}

export {addAllProducts,addTOCart,deleteFromCart,deleteAllFromCart ,  deleteProduct ,  addSearch , addPrice ,deleteFromPrice, deleteAllFromPrice}