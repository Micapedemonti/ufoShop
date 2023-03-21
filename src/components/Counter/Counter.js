import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";

const Counter = ({ stock, initial =0,cartCount,setCartCount}) =>{

const [count, setCount] = useState(initial)


const decrement = () =>{
   setCount(count -1)

}

const increment = () =>{
    if (count < stock) {
        setCount(count + 1);
      }


}

const onAdd = () =>{
    const totalCount = cartCount + count;
    if (totalCount > stock){
        alert('No hay suficiente stock')
    } else {
        setCartCount(totalCount)
        alert (`se agregaron ${count} productos al carrito`)
    }
}
const disabledButton = cartCount + count > stock;
return (
    <div>

   <button onClick={decrement} > -</button>
           <p>{count}</p>
   <button onClick={increment} > +</button>
   <button onClick={onAdd} disabled={disabledButton}>Agregar al Carrito</button>
            <CartWidget count={cartCount} />
   {/* <CartWidget count={cartCount} /> */}
    </div>
)

}
export default Counter