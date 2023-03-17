

const ItemDetail = ({name,img, description, price, stock}) =>{


    return (
        <div className="container-list">
         <div>
        <picture>
            <img src={img} alta={name}/>
        </picture>
        <h3>title:{name}</h3>
        <p>{price}</p>
        <p>{description}</p>
        <p>{stock}</p>

        </div>
           
        </div>
    )
}

export default ItemDetail