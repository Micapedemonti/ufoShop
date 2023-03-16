import { Link } from "react-router-dom"

const Item = ({ id, name,img}) =>{
     return (
        <div>
        <picture>
            <img src={img} alta={name}/>
        </picture>
        <h3>{name}</h3>
        <Link to = {`/detail/${id}`}>Ver detalle</Link>

        </div>
     )
}

export default Item