import React, { ReactElement, createContext, useState, useEffect } from "react"

// this is corrlated with the data (folder)
export type ProductType = {
    sku: string,
    name:string,
    price:number
}


// const initState: ProductType[] = [] // different way
const initState: ProductType[] = [
        {
        "sku": "item0001",
        "name": "Louis Vutton",
        "price": 4999.99
        },
        {
        "sku": "item0002",
        "name": "Hermes",
        "price": 2499.99
        },
        {
        "sku": "item0003",
        "name": "Gucci",
        "price": 9999.99
        }
    ]

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = {children?: ReactElement | ReactElement[]}


export const ProductsProvider = ({children}: ChildrenType):
ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState)

    // useEffect(() =>  {                      // the return type
    //     const fetchProducts = async (): Promise<ProductType[]> => {
    //         const data = await fetch('http://localhost:3500/products')
    //             .then( res => {
    //                 return res.json()})
    //             .catch(err => { if (err instanceof Error) console.log(err.message)
    //         })
    //         return data
    //     }

    //     fetchProducts().then(products => setProducts(products))
    // }, [])

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext