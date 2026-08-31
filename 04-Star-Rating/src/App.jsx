
import { useState } from 'react';
import './App.css'
import { FaStar } from 'react-icons/fa'
function App() {

  const [totalStar, setTotalStar] = useState(0);
  const [rating,setRating] = useState(0);
  const [hover,setHover] = useState(0);

  function handleClick(currentIndex) {
    setRating(currentIndex);
  }

  function handleMouseOver(currentIndex) {
    setHover(currentIndex);
  }
  
  function handleMouseLeave() {
    setHover(rating)
  }
console.log(hover)

  function starsPrompt() {
    const p = prompt('out of how many stars you want to rate (total no. of stars)?');

    if (!isNaN(p) && p > 0) {
      console.log('total start will be ' + p);
      setTotalStar(Number(p));
    } else {
      console.log('please enter a valid number')
    }
  }

  return (
    <div className='star-rating'>

      <button type="button" onClick={starsPrompt}>Give your feedback</button>

      {
        [...Array(totalStar)].map((_, index) => {
          index += 1
          return <FaStar
            key={index}
            size={40}
            onClick={() => handleClick(index)}
            onMouseOver={()=>handleMouseOver(index)}
            onMouseLeave={handleMouseLeave}
            className = {index <= (hover || rating) ? 'a':'b'}
          />
        })
      }

    </div>
  )
}

export default App