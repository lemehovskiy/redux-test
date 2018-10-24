import React from 'react'
import {connect} from 'react-redux'
import {addItem, openAddNewEditor, closeAddNewEditor} from '../../actions'
require('./style.scss');

const AddNewPost = ({dispatch, isOpen}) => {

    let input,
        storeNameInput;

    function onClickClose() {
        dispatch(closeAddNewEditor())
    }

    function onClickOpen() {
        dispatch(openAddNewEditor());
    }

    const form =
        <form className="form-add-item"
              onSubmit={e => {
                  e.preventDefault()
                  if (!input.value.trim()) {
                      return
                  }

                  dispatch(addItem(input.value, storeNameInput.value));
                  input.value = '';
                  storeNameInput.value = '';
              }}>
            <label htmlFor="title">
                Title:
                <input ref={node => input = node} name="title"/>
            </label>
            <label htmlFor="store-name">
                Store name:
                <input ref={node => storeNameInput = node} name="store-name"/>
            </label>
            <button type="submit">Add</button>
            <button type="button" onClick={onClickClose}>Close</button>
        </form>;

    const openTrigger = <div>
        <button type="button" onClick={onClickOpen}>Add new post</button>
    </div>;

    return (
        <div>
            {isOpen ? form : openTrigger}

        </div>
    )
}

export default connect(state => state.addNewEditor)(AddNewPost)