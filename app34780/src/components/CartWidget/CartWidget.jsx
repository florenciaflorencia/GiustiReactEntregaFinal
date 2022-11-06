import "./CartWidget.css";
import carrito from "../assets/carrito.png";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext"
import {Link} from "react-router-dom"

const CartWidget = () => {
    const {totalQuantity} = useContext (CartContext)

    return (
        <div className="widget">
            <div className="CartWidget"></div>
            <Link className="carrito" to="/cart"> <img id="carrito" src={carrito} alt="" /></Link>
            <span className="number" id="number" > {totalQuantity}</span>
        </div>
    )
}

export default CartWidget