import { useState } from 'react'
import logo from '../../img/carrito.png'


const CartWidget = ({count}) =>{



    return (
        <>
        <img src ={logo} style={{width:30}}/>
        <h5>{count}</h5>
        </>
    )
}

export default CartWidget