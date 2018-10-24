import React from 'react'
import {connect} from 'react-redux'
import {addItem, closeAddNewEditor} from '../../actions'
require('./style.scss');

const AddNewPost = ({dispatch, isOpen}) => {

    let input,
        storeNameInput;

    function onClickClose() {
        dispatch(closeAddNewEditor())
    }


    const form =  <form className="form-add-item"
                        onSubmit={e => {
                  e.preventDefault()
                  if (!input.value.trim()) {
                    return
                  }

                      dispatch(addItem(input.value, storeNameInput.value));
                      input.value = '';
                      storeNameInput.value = '';
                }}
    >
        <label htmlFor="title">
            Title:
            <input ref={node => input = node} name="title"/>
        </label>
        <label htmlFor="store-name">
            Store name:
            <input ref={node => storeNameInput = node} name="store-name"/>
        </label>
        <button type="submit">Add post</button>
        <button type="button" onClick={onClickClose}>Close</button>
    </form>;



    return (
         <div>
             <div className="controls">

             </div>
         </div>
    )
}

export default connect(state => state.addNewEditor)(AddNewPost)