import {connect} from 'react-redux'
import ItemsList from '../components/ItemsList/'
import {showModal, editItem} from "../actions/";

const mapStateToProps = state => ({
    itemsList: state.itemsList
})

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(showModal('SHOW_MODAL', 'DELETE_POST', {postId: id})),
    editItem: id => dispatch(editItem(id))
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(ItemsList)