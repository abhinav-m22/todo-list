import React from 'react'

const ItemList = ({ items }) => {
    return (
        <ul className='list-group'>
            {items.map((item) => (
                <li>{item.title}</li>
            ))}
        </ul>
    )
}

export default ItemList