import React from 'react'
import {connect} from 'react-redux'
import {addItem, saveItem} from '../actions/'

const Editor = ({dispatch, editorType, id, title, storeName}) => {
    let input,
        storeNameInput;
    
    return (
        <form className="form-add-item"
              onSubmit={e => {
                  e.preventDefault()
                  if (!input.value.trim()) {
                    return
                  }
                  dispatch(saveItem(id, input.value, storeNameInput.value));
                  input.value = '';
                  storeNameInput.value = '';
                }}
        >
            <label htmlFor="title">
                Title:
                <input ref={node => input = node} name="title" defaultValue={title}/>
            </label>
            <label htmlFor="store-name">
                Store name:
                <input ref={node => storeNameInput = node} name="store-name" defaultValue={storeName}/>
            </label>
            <button type="submit">
                {editorType == 'edit' ? 'Save' : 'Add post'}
            </button>
        </form>
    )


}

export default connect()(Editor)