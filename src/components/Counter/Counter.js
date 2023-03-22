import  './Counter.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Form from "../Form/Form";
import ItemCart from "../ItemCart/ItemCart";
const Counter = ({ stock, initial =0,cartCount,setCartCount}) =>{

const [count, setCount] = useState(initial)

const [showForm, setShowForm] = useState(false);

const decrement = () =>{
    if (count > 0)
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
    <>
    <div className="counter">

   <button onClick={decrement} className="btn-counter"> -</button>
           <p>{count}</p>
   <button onClick={increment} > +</button>
   </div>
   <div className="btn-add">
   <button onClick={onAdd} disabled={disabledButton}>Agregar al Carrito</button>
   </div>
    <CartWidget count={cartCount} />
      {/* {showForm ? <Link to ={{'/cart',state:{ itemCount:count}}>Ir al carrito</Link> : null} */}
       {showForm ? 
      <Link to='/cart'>Ir al carrito</Link>:null}
</>
    
)

}
export default Counter