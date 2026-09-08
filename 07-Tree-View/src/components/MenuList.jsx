import React from 'react'
import MenuItem from './MenuItem.jsx'

const MenuList = ({ list }) => {
    return (
        <ul>
            {
                list && list.length > 0 ? (
                    list.map((listItem) => (
                        < MenuItem item = { listItem } key={listItem.id}/>
                    ))
                ) : <div>List Not Found</div>
            }
        </ul>
    )
}

export default MenuList