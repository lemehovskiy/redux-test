import {removeItem, hideModal} from '../../actions'
import {connect} from 'react-redux'
import React, {Component} from 'react';


const DeletePostModal = ({postId, dispatch}) => (
    <div>
        <p>Delete post {postId}?</p>
        <button onClick={() => {
                dispatch(hideModal())
              dispatch(removeItem(postId)).then(() => {
                
              })
            }}>
            Yes
        </button>
        <button>
            Nope
        </button>
    </div>
)

export default connect()(DeletePostModal)