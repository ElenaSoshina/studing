import {useState, useEffect} from 'react'

type Product = {
    id: number
    title: string
}

const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setProducts(data.products))
            .catch(error => console.error('Error fetching products:', error))
    }, [])

    return products
}

export default useProducts