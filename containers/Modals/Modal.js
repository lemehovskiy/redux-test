// These are regular React components we will write soon
import DeletePostModal from './DeleteItemModal'
// import ConfirmLogoutModal from './ConfirmLogoutModal'
import {connect} from 'react-redux'
import React, { Component } from 'react';

const MODAL_COMPONENTS = {
    'DELETE_POST': DeletePostModal
    // 'CONFIRM_LOGOUT': ConfirmLogoutModal,
    /* other modals */
}

const ModalRoot = ({ modalType, modalProps }) => {
    if (!modalType) {
        return null // after React v15 you can return null here
    }

    const SpecificModal = MODAL_COMPONENTS[modalType]

    return (
        <div>
            <div className="modal-overlay"></div>
            <SpecificModal {...modalProps} />
        </div>
    )
}

export default connect(
    state => state.modal
)(ModalRoot)