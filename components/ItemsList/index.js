import React from 'react'
import Item from './../Item'
import ItemEditMode from './../ItemEditMode'
require('./style.scss');

const ItemsList = ({itemsList, removeItem, openItemEditor}) => {

    let items = itemsList.map((item) => {
        let displayItem = <Item
            key={item.id}
            {...item}
            onClickRemove={()=> removeItem(item.id)}
            onClickEdit={()=> openItemEditor(item.id)}
        />

        if (item.editMode) {
            displayItem = <ItemEditMode
                key={item.id}
                {...item}
            />
        }

        return displayItem;
    })


    return (
        <ul className="items-list">
            {items}
        </ul>
    )
}

export default ItemsList