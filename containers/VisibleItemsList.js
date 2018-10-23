import { connect } from 'react-redux'
import ItemsList from '../components/ItemsList/'
import { toggleRemove } from '../actions'

const mapStateToProps = state => ({
    itemsList: state.itemsList
})

const mapDispatchToProps = dispatch => ({
    toggleRemove: id => dispatch(toggleRemove(id))
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(ItemsList)