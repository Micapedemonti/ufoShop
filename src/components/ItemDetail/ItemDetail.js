import { useState } from "react"
import Counter from "../Counter/Counter";

const ItemDetail = ({name,img, description, price, stock}) =>{


    const [cartCount, setCartCount] = useState(0);
    return (
        <div className="container-list">
         <div>
        <picture>
            <img src={img} alta={name}/>
        </picture>
        <h3>title:{name}</h3>
        <p>{price}</p>
        <p>{description}</p>
        <p>{stock}</p>
        <Counter stock={stock} cartCount={cartCount} setCartCount={setCartCount} />

        </div>
           
        </div>
    )
}

export default ItemDetail