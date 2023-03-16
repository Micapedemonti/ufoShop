const products = [ 
    {
        name: "tabla de skate element",
        id:1,
        price: '75.000',
        category:'tablas',
        img: 'https://elementcl.vtexassets.com/arquivos/ids/166708-800-auto?v=638127717037830000&width=800&height=auto&aspect=true',
        description:'Siente el calor que emana del gráfico inferior de la Disconnect Fire Skateboard Deck, diseñado por el director de arte de ELEMENT, Bryan Arii. El desarrollo de esta tabla, que ofrece una conducción suave y de alto rendimiento para patinadores experimentados, refleja nuestro compromiso de larga data con la superioridad técnica y el refinamiento. Fabricado con nuestra fórmula estándar de siete capas y materiales de primera calidad, viene en un solo tamaño.',
        stock: '25',
        
    },
    {
        name: "Tabla Completa Gangsta TIE DYE 8.0",
        id:2,
        price: '75.000',
        category:'skates',
        img: 'https://cdn.shopify.com/s/files/1/1629/6545/products/TablaCompletaGangstaTIEDYE8.0_500x.png?v=1673534206',
        description:'Skate completo, ideal para personas iniciándose en el skateboard, o para personas con experiencias. La tabla de skate TIE DYE de 8.0” que entrega un acho versátil para todas las edades. Posee componentes livianos, fabricada con 7 pliegos de maple prensados en calor, ideal para aventurarse en este deporte.',
        stock: '22',
        
    },
    {
        name: "Herramienta Hook tipo T",
        id:3,
        price: '75.000',
        category:'accesorios',
        img: 'https://cdn.shopify.com/s/files/1/1629/6545/products/Llave_Hook_Black1_500x.jpg?v=1645556153',
        description:'Esta práctica herramienta tipo T ofrece todo los necesario para reforzar o reparar tu patín. Es portátil y muy conveniente, cabe fácilmente en la mayoría de los bolsillos, permitiéndote realizar algunas reparaciones, cambiar ruedas, rodamientos y apretar sus partes donde y cuando lo requieras.Es una herramienta de alta calidad, con manija de material de acero, más cabezal de aleación que la hacen fuerte, duradera y necesaria para tu kit de reparación.',
        stock: '25',
        
    },
    {
        name: "tabla de skate element",
        id:4,
        price: '75.000',
        category:'tablas',
        img: 'https://elementcl.vtexassets.com/arquivos/ids/166708-800-auto?v=638127717037830000&width=800&height=auto&aspect=true',
        description:'Siente el calor que emana del gráfico inferior de la Disconnect Fire Skateboard Deck, diseñado por el director de arte de ELEMENT, Bryan Arii. El desarrollo de esta tabla, que ofrece una conducción suave y de alto rendimiento para patinadores experimentados, refleja nuestro compromiso de larga data con la superioridad técnica y el refinamiento. Fabricado con nuestra fórmula estándar de siete capas y materiales de primera calidad, viene en un solo tamaño.',
        stock: '25',
        
    }

]


export const getProducts = (categoryId) =>{
    return new Promise (resolve =>{
        setTimeout (()=>{
            resolve(categoryId ? products.filter(prod=> prod.category === categoryId ): products)
        },2000)
    })
}

export const getProductsById = (id) =>{
        return new Promise (resolve =>{
            setTimeout (()=>{
                resolve(products.find(prod => prod.id===id))
            },2000)
        })
    

}
