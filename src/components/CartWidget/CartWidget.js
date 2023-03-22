import logo from '../../img/carrito.png'
import NavBar from '../NavBar/NavBar'

const CartWidget = ({count}) =>{



    return (
        <>
        <img src ={logo} style={{width:30}}/>
        <h5>{count}</h5>
        <NavBar count ={count}/>
        </>
    )
}

export default CartWidget