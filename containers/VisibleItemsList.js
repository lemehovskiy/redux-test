import {connect} from 'react-redux'
import ItemsList from '../components/ItemsList/'
import {showModal, openItemEditor} from "../actions/";

const mapStateToProps = state => ({
    itemsList: state.itemsList
})

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(showModal('SHOW_MODAL', 'DELETE_POST', {postId: id})),
    openItemEditor: id => dispatch(openItemEditor(id))
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(ItemsList)