import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
    const [disabled, setDisabled] = useState(false);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);

    function handleClick() {
        setCount(count + 1);
    }


    async function fetchProducts() {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);

            const data = await response.json();

            if (data) {
                setProducts([...products, ...data.products])
            }

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [count])

    useEffect(()=>{
        if(products.length >= 100) {
            setDisabled(true);
        }
    },[products])


    if (loading) {
        return <h1>Loading... </h1>
    }
    if (error) {
        return <h1>Error : {error}</h1>
    }


    return (
        <div className='container'>

            <div className="products-container">
                {
                    products && products.length > 0 ? products.map((product) => (
                        <div className='product' key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <h3>{product.title}</h3>
                        </div>
                    )) : <div>Products Not Found</div>
                }
            </div>



            <div className='footer'>
                <button type="button" onClick={handleClick} disabled={disabled}>Load More</button>
                {
                    disabled ? <p>You have reached 100 products</p> : null
                }
            </div>
        </div>
    )
}

export default App