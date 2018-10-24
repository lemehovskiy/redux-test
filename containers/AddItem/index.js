import React from 'react'
import {connect} from 'react-redux'
import {addItem} from '../../actions'
require('./style.scss');

const AddItem = ({dispatch}) => {
    let input,
        storeNameInput

    return (
        <div>
            <form className="form-add-item"
                  onSubmit={e => {
                  e.preventDefault()
                  if (!input.value.trim()) {
                    return
                  }
                  dispatch(addItem(input.value, storeNameInput.value))
                  input.value = ''
                  storeNameInput.value = ''
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
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default connect()(AddItem)