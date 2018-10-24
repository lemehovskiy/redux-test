import React from 'react'
import Editor from '../containers/Editor';

const ItemEditMode = ({id, title, storeName}) => {

    return (
        <li className="items-list-item">
            <Editor
                id={id}
                editorType="edit"
                title={title}
                storeName={storeName}
            />
        </li>
    )
}

export default ItemEditMode