import React from "react";
import "../ItemCart/ItemCart.css"
import { useCart } from "../../CartContext/CartContext"

const ItemCart = ({product}) => {
    const {removeProduct} = useCart ();

return (    
    <div className='containerCart'>
        <div>
        <h1 className="name">{product.name}</h1>
        </div>
        <div>
            <img src={product.img}/>
        </div>
        <div>
            <p className="priceCart">Precio Unitario: ${product.price}</p>
        </div>
        <div>
            <p className="cantidadCart">Cantidad {product.quantity}</p>
        </div>
        <div>
            <p className="SubTotalCart">Subtotal: ${product.quantity * product.price}</p>
        </div>
        <div>
            <button className='eliminar' onClick={()=>{
                removeProduct(product.id)
           
            }}> Eliminar</button>
        </div>
    </div>
)
}

export default ItemCart