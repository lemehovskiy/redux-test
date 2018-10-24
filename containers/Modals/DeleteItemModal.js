import {removeItem, hideModal} from '../../actions'
import {connect} from 'react-redux'
import React, {Component} from 'react';


const DeletePostModal = ({postId, dispatch}) => (
    <div className="modal modal-delete-post">
        <p>Delete post {postId}?</p>
        <button onClick={() => {
                dispatch(hideModal());
                dispatch(removeItem(postId));
            }}>
            Yes
        </button>
        <button onClick={() => {
                dispatch(hideModal());
            }}>
            Nope
        </button>
        <div className="overlay"></div>
    </div>
)

export default connect()(DeletePostModal)