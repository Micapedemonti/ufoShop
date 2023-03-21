
import Item from "../Item/Item"
import video from '../../img/video2.mp4'

const ItemList = ({products}) =>{
    return (
       <>
        <div className='container-banner' style = {{maxWidth:'700px'}}>
        <video autoPlay loop muted src ={video} />
        <h2>Haz de cada día un skate day</h2>
        
       </div>
        

        <ul className="list-container">
          
                {products.map(prod => <Item key={prod.id}{...prod}/>)}
                
            
        </ul>
     </>
    )
}

export default ItemList