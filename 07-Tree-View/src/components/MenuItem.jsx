import React, { useState } from 'react'
import MenuList from './MenuList'

const MenuItem = ({ item }) => {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggleChildren(getCurrentLabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren, [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
        })
    }
    console.log(displayCurrentChildren);
    return (
        <li>
            <div>
                <p>{item.label}</p>
                {
                    item.children && item.children.length > 0 ? <span onClick={() => handleToggleChildren(item.label)} style={{cursor : 'pointer'}}>
                        {
                            displayCurrentChildren[item.label] ? '-' : '+'
                        }
                    </span> : null
                }
            </div>
            {
                (item.children && item.children.length > 0 && displayCurrentChildren[item.label]) ? (
                    <MenuList list={item.children} />
                ) : null
            }
        </li>

    )
}

export default MenuItem