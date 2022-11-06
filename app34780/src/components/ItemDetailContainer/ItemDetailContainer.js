import {useState, useEffect} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {getProduct} from "../service/Firestore/Productos"
import {useParams} from "react-router-dom"

const ItemDetailContainer =() => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    

    useEffect(() => {
        setLoading (true)

        getProduct(productId)
        .then (product =>{
            setProducts(product)
        })

        .catch(error => {
            console.log(error)
        })
    
        .finally(() => {
            setLoading(false)
        })
    }, [productId])


    if(loading) {
        return <div className='conteinerLista '>
        </div>
    }

    return  (
        <div>
            <ItemDetail key= {products.id} {... products}/>
        </div>
    )
}


export default ItemDetailContainer
