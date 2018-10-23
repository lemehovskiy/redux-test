import React from 'react'

const Item = ({ onClickRemove, title, storeName }) => (
    <li className="items-list-item">
        <div className="title">
            Title: {title}
        </div>
        <div className="store-name">
            Store name: {storeName}
        </div>

        <div className="controls">
            <button onClick={onClickRemove}>Remove</button>
        </div>
    </li>
)

export default Item