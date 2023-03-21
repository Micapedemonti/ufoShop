
import './App.css';
import { useState } from 'react';
import Counter from './components/Counter/Counter';
import NavBar from './components/NavBar/NavBar';
import Form from './components/Form/Form';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter,Route,Routes, Link } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';


function App() {

const[show, setShow]= useState('list')


const handleOnAdd = (quantity)=>{
  console.log(`se agregaron ${quantity} productos al carrito`)
}



  return (
    <>
<div className="App">
    <BrowserRouter>
    <NavBar/>
    <Link to = '/form'>Form</Link>
    <Routes>
    <Route  path='/category/:categoryId' element ={<ItemListContainer/>}/>
      <Route  path='/' element ={<ItemListContainer/>}/>
      <Route  path='/Detail/:productId' element ={<ItemDetailContainer/>}/>
      <Route  path='/form' element ={<Form/>}/>
    </Routes>


    </BrowserRouter>

     {/* <button onClick={()=>setShow('list')}> List</button>
     <button onClick={()=>setShow('detail')}>Detail</button>  */}
     {/* {show === 'list'  ? <ItemListContainer/>:null }
     {show === 'detail'? <ItemDetailContainer/> :null} */}

     {/* <button onClick={()=> setShow(!show )}>{show ? 'Desmontar contador':'Montar contador'}
      { show ? <Counter initial={0} stock={10} onAdd={handleOnAdd}/>:null}
    </button> */}
    </div>
     </> 
  );
}

export default App;
