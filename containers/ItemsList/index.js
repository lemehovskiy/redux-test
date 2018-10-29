import React from 'react'
import {connect} from 'react-redux'
import {showModal, openItemEditor} from "../../actions/";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import Item from './../../components/Item';
import ItemEditMode from './../../components/ItemEditMode'
require('./style.scss');


const ItemsList = ({itemsList, removeItem, openItemEditor}) => {
    let items = itemsList && itemsList.map((item) => {
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

const mapStateToProps = (state) => {
    console.log(state.firestore.ordered.post_list);
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