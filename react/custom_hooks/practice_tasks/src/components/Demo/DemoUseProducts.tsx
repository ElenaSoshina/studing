import { useState } from "react"
import useProducts from "../../hooks/useProducts"

const DemoUseProducts = () => {
    const products = useProducts()
    const [showAll, setShowAll] = useState(false)
    // console.log(products)

    const visible = showAll ? products : products.slice(0, 5)
    const canToggle = products.length > 5


    return (
        <div>
            <h2>useProducts hook demo</h2>
            {
                canToggle && (
                    <button onClick = {() => setShowAll(value => !value)}>
                        {showAll ? 'Show first 5' : 'Show all'}
                    </button>
                )
            }
            <ul>
                {visible.map(product => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default DemoUseProducts