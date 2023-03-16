import { useEffect,useState } from "react"
import { getProducts } from "./AsynMock"
import ItemList from "./ItemList"
import { useParams } from "react-router"

const ItemListContainer = (props) =>{
 
     const[products, setProducts] = useState ([])

     const {categoryId}= useParams()



  useEffect (()=>{
    getProducts(categoryId).then(prods=>{
      setProducts(prods)
    })
    console.log(products)
 


  },[])




    return (
        <div>
        <h1>List</h1>
        <ItemList products = {products} />
        </div>
    )
}

export default ItemListContainer