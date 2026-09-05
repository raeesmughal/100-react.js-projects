import React from 'react'
import ImageSlider from './components/ImageSlider';

const App = () => {
  return (
    <div className='app-container'>
        <ImageSlider url={'https://picsum.photos/v2/list'} page={2} limit={10}/>
    </div>
  )
}

export default App