import './NavBar.css'
import { Link,NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { getCategories } from '../AsynMock';
import { useState,useEffect } from 'react';

const NavBar =() =>{
  const [categories, setCategories] =useState([])

useEffect(()=>{
  getCategories().then (categories =>{
    setCategories(categories)
  })
},[])

    return (
        <nav className="navbar navbar-expand-lg navbar-light  menuNav">
        <div className="container-fluid">
        <div className="Caja-logo">
          {/* <Link  to= './'>
            <img className='logo' src={logo}/>
          </Link> */}
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse menuNav" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link className="nav-link active" to='/tablas'></Link>
              <li className="nav-item inicio">
                <Link className="nav-link active" to='/'>INICIO</Link>
                </li>
            <li className="nav-item"></li>
              {categories.map(cat=> <NavLink key ={cat.id} to ={`/category/${cat.id}`} 
              className={({isActive})=> isActive ? 'ActiveOption ': 'Option'}
              >{cat.name}</NavLink>)}
                 
              <div>

        </div>
            </ul>
            <CartWidget/>
          </div>
        </div>
      
      </nav>
      
    )
}


export default NavBar