import React from 'react'
import Item from './../Item'
require('./style.scss');

const ItemsList = ({ itemsList, toggleRemove}) => (
    <ul className="items-list">
        {itemsList.map(item =>
            <Item
                key={item.id}
                {...item}
                onClickRemove={()=> toggleRemove(item.id)}
            />
        )}
    </ul>
)

export default ItemsList