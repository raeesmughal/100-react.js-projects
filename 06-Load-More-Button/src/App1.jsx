import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [products, setProducts] = useState([]);


  async function fetchProducts(getURL) {
    setLoading(true);
    try {
      const response = await fetch(getURL);
      const data = await response.json();

      if (data) {
        setProducts([...products, ...data.products]);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  console.log(products.length)

  useEffect(() => {
    fetchProducts(`https://dummyjson.com/products?limit=20&skip=${ count * 20}`)

  }, [count])

  useEffect(() => {
    if (products && products.length == 100) {
      setDisabled(true);
    }
  }, [products])



  if (loading) {
    return <div>Loading... Please Wait!</div>
  }
  if (error) {
    return <div>Error : {error}</div>
  }



  return (

    <div className='container'>

      <div className="products-container">
        {
          products && products.length > 0 ? (
            products.map((product, index) => (
              <div className='product' key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </div>
            ))
          ) : null
        }
      </div>

      <div className="footer">
        <button className={disabled ? 'load-more-button disabled' : 'load-more-button'} onClick={() => setCount(count + 1)} disabled={disabled}>Load More</button>

        {
          disabled ? <div>You have reached 100 products</div> : null
        }
      </div>

    </div>

  )
}

export default App