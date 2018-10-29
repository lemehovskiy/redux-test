import React, {Component} from 'react'
import {connect} from 'react-redux'
import {showModal, openItemEditor} from "../../actions/";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import Item from './../../components/Item';
import ItemEditMode from './../../components/ItemEditMode'
require('./style.scss');



class ItemsList extends Component {

    state = {
        itemsInEditMode: []
    }

    handleItemEditMode(id){
        this.setState((state) => {
            itemsInEditMode: state.itemsInEditMode.push(id);
        })
    }

    render(){

        let items = this.props.itemsList && this.props.itemsList.map((item) => {
                let displayItem = <Item
                    key={item.id}
                    {...item}
                    onClickRemove={()=> this.props.removeItem(item.id)}
                    onClickEdit={()=> this.handleItemEditMode(item.id)}
                />

                if (this.state.itemsInEditMode.includes(item.id)) {
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
        {collection: 'post_list'}
    ])
)(ItemsList)