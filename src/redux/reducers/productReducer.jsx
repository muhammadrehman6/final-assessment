
const initialState = {
    products : [],
    search  : '',
    cart : [],
    totalPrice : []
}

const productReducer = (state = initialState , action)=>{
    switch(action.type){
        case 'SEARCH':
            return {
                ...state,
                search : action.payload
            }
        case 'ALL_PRODUCTS':{
            return {
                ...state,
                products : action.payload
            }
        }
        case 'DELETE_PRODUCT':
            const filterData1 = state.products.filter(x=>x.id !== action.id )
            return {
            ...state,
            products : filterData1  
        }
        case 'ADD_CART':
            return {
                ...state,
                cart : [...state.cart , action.payload]
            }
            case 'DELETE_CART':
                const filterData = state.cart.filter(x=>x.id !== action.id)
                return {
                ...state,
                cart : filterData  
            }
            case 'DELETE_ALL' :
                return{
                    ...state,
                    cart : []
                }
            case 'ADD_PRICE':
                return {
                    ...state,
                    totalPrice : [...state.totalPrice , action.payload]
                }
                case 'DELETE_PRICE':
                const filterData2 = state.totalPrice.filter(x=>x !== action.price)
                return {
                ...state,
                totalPrice : filterData2  
            }
                case 'DELETE_ALL_PRICE' :
                    return{
                        ...state,
                        totalPrice : []
                    }
            default :
            return state
    }
}

export default productReducer