import { useState } from "react"
import { data } from "./data"


const App = () => {

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [selectionArray, setSelectionArray] = useState([]);



  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  function handleMultiSelection(currentId) {
    const copyMultiple = [...selectionArray];
    const indexOfCurrentId = copyMultiple.indexOf(currentId);

    if (indexOfCurrentId == -1) {
      copyMultiple.push(currentId);
    } else {
      copyMultiple.splice(indexOfCurrentId, 1)
    }

    setSelectionArray(copyMultiple);
  }

  function handleClick(currentId) {
    if (enableMultiSelection) handleMultiSelection(currentId)
    else handleSingleSelection(currentId)
  }

  console.log(selected);
  console.log(enableMultiSelection);
  console.log(selectionArray)

  return (
    <div className="wrapper">
      <h1>Accordion</h1>

      <h3>The selected question is : {selected ? selected : 0}</h3>

      <button type="button" onClick={() => setEnableMultiSelection(!enableMultiSelection)}>{enableMultiSelection ? "Disable" : "Enable"} Multi Selection</button>


      <div className="accordion-container">

        {
          data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item" key={dataItem.id}>

                <div className="title" onClick={() => handleClick(dataItem.id)}>
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>

                {
                  enableMultiSelection ? (
                    selectionArray.indexOf(dataItem.id) !== -1 && <div className="content">{dataItem.answer}</div>
                  ) : selected === dataItem.id && <div className="content">{dataItem.question}</div>
                }



              </div>
            ))

          ) : <div>Data Not Found</div>
        }

      </div>

    </div>
  )
}

export default App