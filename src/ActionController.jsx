import { getCategoryData, getProductData } from "./services/apiData"

const handleProductData = async()=>{
    try{
        const res = await getProductData()
        console.log(res.data)
        return res.data
       
    }catch(e){
        console.log(e.message)
    }
}

const handleCategoryData = async()=>{
    try{
        const res = await getCategoryData()
       
        return res.data
    }catch(e){
        console.log(e.message)
    }
}

export {handleProductData , handleCategoryData}