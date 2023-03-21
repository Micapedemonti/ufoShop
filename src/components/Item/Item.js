import { Link } from "react-router-dom"

const Item = ({ id, name,img,stock}) =>{
     return (
        <div>
        <picture>
            <img src={img} alta={name} width='400px' />
        </picture>
        <h3>{name}</h3>
        <p>{stock}</p>
        <Link to = {`/detail/${id}`}>Ver detalle</Link>

        </div>
     )
}

export default Item