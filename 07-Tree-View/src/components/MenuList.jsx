import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({ list = [] }) => {
    return (
        <ul className='menu-list-container'>

            {
                (list && list.length > 0) ? (
                    list.map((item, index) => (
                        <MenuItem item={item} key={index} />
                    ))
                ) : <div>No List Found</div>
            }

        </ul >
    )
}

export default MenuList