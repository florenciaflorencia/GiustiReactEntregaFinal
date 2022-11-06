import {Link} from "react-router-dom"
import ItemCart from "../ItemCart/ItemCart"
import "./Cart.css"
import { useCart } from "../../CartContext/CartContext"


const Cart = () => {
    const {cart,total,clearCart} = useCart ();
    

    if (cart.length === 0)
    return (
        <div>
        <p className='vacio'> No hay elementos en el carrito </p>
        <Link className='comienzo' to='/'> Comenzar compra</Link>
        </div>
    )

    return (
        <div>
            <div className='productsContainer'>
            {cart.map(products => <ItemCart key={products.id} product = {products}/>)}
            </div>
            <div className='totalPagarContainer'>
                <div className='totalAPagar'>
                    <p className='total'>Total a Pagar: ${total}</p>
                </div>
            </div>    
            <button className="buttonTotal" onClick={() =>{ 
                clearCart() 
        
            }}
            >Vaciar carrito</button>
            <button className='buttonVaciar'><Link className='innerLink'  to='/checkout' >Checkout</Link></button>
        
        </div>

    )
}

export default Cart 