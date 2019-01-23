import React, {Component} from 'react'
import {connect} from 'react-redux'
import {showModal, openItemEditor} from "../../actions/";
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux'
import Item from './../../components/Item';
import ItemEditMode from './../../components/ItemEditMode'
import ReactTooltip from 'react-tooltip'
import { TransitionGroup, Transition } from 'react-transition-group';

require('./style.scss');


import gridConfig from "./../../config/gridConfig.json";


class ItemsList extends Component {

    state = {
        itemsInEditMode: [],
        componentDidMount: false
    }

    handleItemEditMode(id) {
        this.setState((state) => {
            itemsInEditMode: state.itemsInEditMode.push(id);
        })
    }

    componentDidUpdate(){
        ReactTooltip.rebuild()
    }

    render() {

        // let conf = {gridConfig: []};
        //
        // for (let i = 0; i < 2000; i++){
        //         conf.gridConfig.push([
        //             Math.floor(Math.random() * 100) + 1,
        //             Math.floor(Math.random() * 100) + 1
        //         ])
        // }
        //
        // console.log(conf);

        let items = this.props.itemsList && this.props.itemsList.map((item, index) => {

                let displayItem = <Item
                    key={item.id}
                    {...item}
                    position={gridConfig[index]}
                    data-tip
                    data-for="sadFace"
                />

                if (this.state.itemsInEditMode.includes(item.id)) {
                    displayItem = <ItemEditMode
                        key={item.id}
                        {...item}
                    />
                }

                return displayItem;
            })

        if (!this.props.itemsList) return <div></div>;

        return (
            <div className="rect-outer">
                <div className="rect-inner">

                    <ul>
                        {items}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemsList: state.firestore.ordered.post_list
    }
}

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(showModal('SHOW_MODAL', 'DELETE_POST', {postId: id})),
    openItemEditor: id => dispatch(openItemEditor(id))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'post_list', orderBy: ['date', 'asc'], limit: 10}
    ])
)(ItemsList)