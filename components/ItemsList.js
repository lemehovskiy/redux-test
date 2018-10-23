import React from 'react'
import Item from './Item'

const ItemsList = ({ itemsList }) => (
    <ul>
        {itemsList.map(item =>
            <Item
                key={item.id}
                {...item}
            />
        )}
    </ul>
)

export default ItemsList