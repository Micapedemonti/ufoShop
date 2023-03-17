import { useEffect,useState } from "react"
import { getProducts } from "../AsynMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router"
import './ItemListContainer.css'



const ItemListContainer = (props) =>{
 
     const[products, setProducts] = useState ([])

     const {categoryId} =useParams()

  

  useEffect (()=>{
    getProducts(categoryId).then(prods=>{
      setProducts(prods)
    })
    console.log(products)
 


  },[categoryId])




    return (
        <div className="" >
        <ItemList products = {products} />
        </div>
    )
}

export default ItemListContainer