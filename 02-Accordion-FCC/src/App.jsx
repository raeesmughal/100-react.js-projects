import { useState } from 'react'
import './App.css'
import { data } from './data';

const App = () => {

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  function handleSingleSelection(getCurrentId) {
    setSelected(selected === getCurrentId ? null : getCurrentId);
  }

  console.log(selected);
  console.log(enableMultiSelection);

  return (
    <div className='wrapper'>
      <div className='accordion'>
        <h1>Accordion</h1>
        <div>
          <h3>Selected Question is : {selected ? selected : 0}</h3>
        </div>

        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>{} Multi Selection</button>
        {
          data && data.length > 0 ?
            data.map((dataItem) => (
              <div className='item' key={dataItem.id}>
                <div className="title" onClick={() => handleSingleSelection(dataItem.id)}>
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                <div>
                  {
                    selected === dataItem.id ?
                      <div className='content'>{dataItem.answer}</div>
                      : null
                  }
                </div>
              </div>
            ))
            : <div>Data not found</div>
        }

      </div>
    </div>
  )
}

export default App