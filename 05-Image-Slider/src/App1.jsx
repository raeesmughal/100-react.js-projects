
import './App.css'
import ImageSlider from './components/ImageSlider'

function App() {

  return (
    <div className='app-container'>
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={13} page={43} />
    </div>
  )
}

export default App
