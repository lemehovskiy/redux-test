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
            <div className="button-group">
                <button type="submit">Save</button>
                <button type="button" onClick={onClickClose}>Cancel</button>
            </div>
        </form>;

    const openButton = <div>
        <button type="button" onClick={onClickOpen}>Add new post</button>
    </div>;

    return (
        <div className="section-add-item">
            {isOpen ? form : openButton}
        </div>
    )
}

export default connect(state => state.addNewEditor)(AddNewPost)