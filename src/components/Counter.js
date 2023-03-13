import { useState } from "react";

const Counter = () =>{

    const [count, setCount] = useState(0)

const decrement = () =>{
    console.log ('decrement')
   setCount(count -1)

}

const increment = () =>{
    console.log ('increment')
   setCount(count +1)
}


return (
    <div>

   <button onClick={decrement} > -1</button>
           <p>{count}</p>
   <button onClick={increment} > +1</button>
    </div>
)

}
export default Counter