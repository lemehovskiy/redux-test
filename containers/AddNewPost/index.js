import React, {Component} from 'react'
import {connect} from 'react-redux'

import {addItem, openAddNewEditor, closeAddNewEditor} from '../../actions'
require('./style.scss');


class AddNewPost extends Component {
    state = {
        title: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addItem(this.state);
    }
    onClickClose =() => {
        this.props.onClickClose();
    }
    onClickOpen =() => {
        this.props.onClickOpen();
    }

    render() {
        const form =
            <form className="form-add-item" onSubmit={this.handleSubmit}>
                <label htmlFor="title">
                    Title:
                    <input name="title" onChange={this.handleChange}/>
                </label>
                <div className="button-group">
                    <button type="submit">Save</button>
                    <button type="button" onClick={this.onClickClose}>Cancel</button>
                </div>
            </form>;

        const openButton = <div>
            <button type="button" onClick={this.onClickOpen}>Add new post</button>
        </div>;

        return (
            <div className="section-add-item">
                {this.props.addNewEditorIsOpen ? form : openButton}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addNewEditorIsOpen: state.addNewEditor.isOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (project) => dispatch(addItem(project)),
        onClickClose: () => dispatch(closeAddNewEditor()),
        onClickOpen: () => dispatch(openAddNewEditor())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewPost)