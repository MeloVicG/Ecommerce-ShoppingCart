import { ProductType } from "../context/ProductsProvider"
import { ReducerActionType, ReducterAction } from "../context/CartProvider"
import { ReactElement } from "react"

type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducterAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean,
}

const Product = ({product, dispatch, REDUCER_ACTIONS, inCart}: PropsType): ReactElement => {
    // const img: string = require(`../images/${product.sku}.jpg`) //old way of doing it. (wont work with vite)
    const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href
    console.log(img)

    const onAddToCart = () => dispatch({type:REDUCER_ACTIONS.ADD, 
                                        payload: {...product, 
                                        qty:1} })

    const itemInCart = inCart ? 'item in cart ✔' : null

    const content = 
        <article className="product">
            <h3>{product.name}</h3>
            <img src={img} alt={product.name} 
                className="product_img"/>
            <p>
                {new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'}).format(product.price)}
                {itemInCart}
            </p>
            <button onClick={onAddToCart}></button>
        </article>
    
    return content
}

export default Product