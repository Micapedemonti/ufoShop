import { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Form from "../Form/Form";
const Counter = ({ stock, initial =0,cartCount,setCartCount}) =>{

const [count, setCount] = useState(initial)

const [showForm, setShowForm] = useState(false);

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
        setShowForm(true);
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
      {showForm ? <Link to ='/form'>Ir al carrito</Link> : null}
   
   {/* <CartWidget count={cartCount} /> */}
    </div>
)

}
export default Counter