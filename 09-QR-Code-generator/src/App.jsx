import { useState } from 'react'
import './App.css'
import QRCode from 'react-qr-code';

function App() {
  const [input,setInput] = useState('');
  const [qrCode,setQrCode] = useState('');

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput('');
  }

  return (
    <div className='qr-container'>
      <h1>QR Code Generator</h1>

      <div className='input-container'>
        <input 
        type="text"
        onChange={(e)=>setInput(e.target.value)}
        value={input}
        />

        <button type="button" onClick={handleGenerateQrCode}>Generate</button>

      </div>

      <div className='qr-code-container'>
        <QRCode value={qrCode} style={{width : '100%',height : '100%'}}/>
      </div>

    </div>
  )
}

export default App
