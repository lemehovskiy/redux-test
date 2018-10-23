import React from 'react'

const Item = ({ title, storeName }) => (
    <li className="items-list-item">
        <div className="title">
            Title: {title}
        </div>
        <div className="store-name">
            Store name: {storeName}
        </div>
    </li>
)

export default Item