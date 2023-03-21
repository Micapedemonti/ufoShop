import { useState,useEffect } from "react"
import { getProductsById } from "../AsynMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router"


const ItemDetailContainer = () => {
  
const[product, setProduct] =useState ()
const{productId} =useParams();



 useEffect (()=>{
    getProductsById(productId).then(item=>{
      setProduct(item)
    })
    console.log(productId)


    return (()=>{
      setProduct()
    })

  },[productId])



    return (
        <div>
       <h1>Detalle</h1>
         <ItemDetail {...product}/>
        </div>
    )

}


 export default ItemDetailContainer