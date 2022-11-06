import { useParams } from "react-router-dom";
import "../ItemListContainer/ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import {getProducts} from "../service/Firestore/Productos"
import {useAsync} from "../../Hooks/useAsync"

const ItemListContainer =() => {
    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])

    if(loading) {
        return <div className='conteinerLista '>
        </div>
    }

    if(error) {
        return <h1>Ha habido un error</h1>
    }

    return  (
        <div className='conteinerLista '>
            <h1>LISTADO DE PRODUCTOS</h1>
            <ItemList products={products}/>
        </div>
        
    )
}

export default ItemListContainer