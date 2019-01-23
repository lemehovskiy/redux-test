import React from 'react'
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip'

class Item extends React.Component {
    constructor() {
        super();

        // create li DOM reference
        this.liRef = React.createRef();
    }

    componentDidUpdate(){
        this.animeRef = anime({
            targets: this.liRef.current,
            translateX: () => {
                if( this.props.status == 'entering' ) {
                    return ['-100%', '0%'];
                } else if( this.props.status == 'exiting' ) {
                    return ['0%', '100%'];
                }
            },
            elasticity: () => {
                if( this.props.status == 'entering' ) {
                    return 300;
                } else if( this.props.status == 'exiting' ) {
                    return 0;
                }
            },
            duration: 500
        });
    }

    render() {
        let positionElement = {
            top: this.props.position == undefined ? 50 : this.props.position[0] + '%',
            left: this.props.position == undefined ? 50 : this.props.position[1] + '%'
        }

        return (
            <li className="list-item" ref={ this.liRef }>
                <a className="items-list-item" style={positionElement} data-for='sadFace' data-tip={this.props.title}></a>
            </li>
        );
    }
}

export default Item