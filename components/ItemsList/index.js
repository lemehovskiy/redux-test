import React from 'react'
import Item from './../Item'
require('./style.scss');

const ItemsList = ({ itemsList }) => (
    <ul className="items-list">
        {itemsList.map(item =>
            <Item
                key={item.id}
                {...item}
            />
        )}
    </ul>
)

export default ItemsList