import { useState } from "react"

const Form = () =>{

   const [input, setInput]=useState ('')

   const handleSubmit =(e)=>{
    e.preventDefault ()
     console.log(input)
   }



    return(
        <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e)=> setInput(e.target.value)}/>
          <button type="submit">Submit</button>
        </form>
        </div>
      
    )
}

export default Form