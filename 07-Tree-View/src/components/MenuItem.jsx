import React, { useState } from 'react'
import MenuList from './MenuList'

const MenuItem = ({ item }) => {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})
    const hasChildren = item.children && item.children.length > 0

    function handleToggleChildren(getCurrentLabel) {
        setDisplayCurrentChildren({ [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel] })

        // Square brackets around an object key allow you to use a dynamic variable as the key name instead of a hardcoded string.
        // Computed property names—using square brackets [ ]—tell JavaScript: "Don't treat this word literally. Look up the variable inside the brackets first, get its value, and use THAT value as the key name."
    }

    console.log(displayCurrentChildren);

    return (
        <li>
            <div>
                <p>{item.label}</p>
                {
                    hasChildren ? <span onClick={() => handleToggleChildren(item.label)}>
                        {displayCurrentChildren[item.label] ? '-':'+'}
                    </span> : null
                }
            </div>
            {
                hasChildren && displayCurrentChildren[item.label] ? <MenuList list={item.children} /> : null
            }
        </li>

    )
}

export default MenuItem



// easier way : 

// import React, { useState } from 'react'
// import MenuList from './MenuList';

// const MenuItem = ({ item }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   console.log(item)
//   const hasChildren = item && item.children && item.children.length > 0;

//   function handleToggleChildren() {
//     setIsOpen(!isOpen)
//   }

//   return (
//     <li>
//       <div>
//         <p>{item.label}</p>
//         {
//           hasChildren ? <span onClick={handleToggleChildren}>{isOpen ? '-' : '+'}</span> : null
//         }
//       </div>

//       {
//         hasChildren && isOpen ? <MenuList list={item.children} /> : null
//       }

//     </li>
//   )
// }

// export default MenuItem