import React from 'react'
import ReactTooltip from 'react-tooltip'


const Item = ({title, position}) => {

    let positionElement = {
        top: position == undefined ? 50 : position[0] + '%',
        left: position == undefined ? 50 : position[1] + '%'
    }

     return <a className="items-list-item" style={positionElement} data-for='sadFace' data-tip={{title: title}}>
                {title}
            </a>





}

export default Item