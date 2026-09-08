import MenuList from './components/MenuList.jsx'
import { menus } from './menus.js'
import './App.css'
const App = () => {
  return (
    <div className='tree-view-container'>
      <MenuList list={menus} />
    </div>
  )
}

export default App