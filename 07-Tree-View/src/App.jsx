
import './App.css'
import MenuList from './components/MenuList'
import { menus } from './menus'

function App() {

  return (
    <div>
      <MenuList list={menus}/>
    </div>
  )
}

export default App
