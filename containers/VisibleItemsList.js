import { connect } from 'react-redux'
import ItemsList from '../components/ItemsList'

const mapStateToProps = state => ({
    itemsList: state.itemsList
})

export default connect(
    mapStateToProps
)(ItemsList)