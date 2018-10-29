import {connect} from 'react-redux'
import ItemsList from '../components/ItemsList/'
import {showModal, openItemEditor} from "../actions/";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'

const mapStateToProps = (state) => {
    console.log(state.firestore.ordered.post_list);
    return {
        itemsList: state.firestore.ordered.post_list
    }
}

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(showModal('SHOW_MODAL', 'DELETE_POST', {postId: id})),
    openItemEditor: id => dispatch(openItemEditor(id))
});

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'post_list'}
    ])
)(ItemsList)