
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {


const myFunction = ()=>{
  console.log('hice click')
}



  return (
    <div className="App">
     <NavBar/>
     <h1>UFO SHOP</h1>
     <ItemListContainer greeting = {"Hola "}/>
     <Counter/>
     <Button callback ={myFunction}/>
    </div>
  );
}

export default App;
