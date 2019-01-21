import React, {Component} from 'react'
import {connect} from 'react-redux'

import {addPost} from '../../actions'
require('./style.scss');


class AddNewPost extends Component {
    state = {
        name: '',
        zip: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addPost(this.state);

        for (let i = 0; i < 1900; i++){
            this.props.addPost({
                title:  Math.floor(Math.random() * 2000) + 1,
            });
        }
    }


    render() {

        return (
            <form className="form-add-item" onSubmit={this.handleSubmit}>
                <label htmlFor="title">
                    Title:
                    <input name="title" onChange={this.handleChange}/>
                </label>
                <label htmlFor="zip">
                    Zip:
                    <input name="zip" onChange={this.handleChange}/>
                </label>

                <div className="radio-group">
                    <label>
                        Icon type 1
                        <input type="radio" value="option-1" name="icon-type" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Icon type 2
                        <input type="radio" value="option-2" name="icon-type" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Icon type 3
                        <input type="radio" value="option-3" name="icon-type" onChange={this.handleChange}/>
                    </label>
                </div>
                <div className="button-group">
                    <button type="submit">Send</button>
                </div>
            </form>
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
        addPost: (project) => dispatch(addPost(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewPost)