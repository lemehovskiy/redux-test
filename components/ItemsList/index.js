import React from 'react'
import Item from './../Item'
require('./style.scss');

const ItemsList = ({ itemsList, removeItem, editItem}) => (
    <ul className="items-list">
        {itemsList.map(item =>
            <Item
                key={item.id}
                {...item}
                onClickRemove={()=> removeItem(item.id)}
                onClickEdit={()=> editItem(item.id)}
            />
        )}
    </ul>
)

export default ItemsList