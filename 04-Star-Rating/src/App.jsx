
import { useState } from 'react';
import './App.css'
import { FaStar } from 'react-icons/fa'
function App() {

  const [totalStar, setTotalStar] = useState(null);


  function starsPrompt() {
    const p = prompt('out of how many stars you want to rate (total no. of stars)?');

    if (!isNaN(p) && p > 0) {
      console.log('total start will be ' + p);
      setTotalStar(Number(p));
    }else{
      console.log('please enter a valid number')
    }

  }

  return (
    <div className='star-rating'>

      <button type="button" onClick={starsPrompt}>Give your feedback</button>

      {
        
      }




    </div>
  )
}

export default App
