import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [colorType, setColorType] = useState('hex');

  const [color, setColor] = useState('#000');

  function hexNumber() {
    const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    return arr[Math.floor(Math.random() * arr.length)]
  }
  function generateHexColor() {
    let hexcolor = '#';
    let i = 0;
    while (i < 6) {
      hexcolor += hexNumber();
      i++;
    }
    setColor(hexcolor);
  }

  function generateRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r},${g},${b})`);

  }

  function handleClick() {
    colorType === 'hex' ? generateHexColor() : generateRgbColor()
  }

  useEffect(()=>{
    handleClick()
  },[colorType])



  return (
    <div className='container' style={{
      height: '100vh',
      width: '100vw',
      backgroundColor: color,
    }}>

      <div className="button-container">
        <button type="button" onClick={() => setColorType('hex')}>HEX</button>
        <button type="button" onClick={() => setColorType('rgb')}>RGB</button>

        <button type="button" onClick={handleClick}>Generate</button>
      </div>

      <h1>{color}</h1>


    </div>
  )
}

export default App