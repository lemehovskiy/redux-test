// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import Counter from '../containers/Counter';
// import * as CounterActions from '../actions/counter';
//
// function mapStateToProps(state) {
//   return {
//     counter: state.counter
//   };
// }
//
//   function mapDispatchToProps(dispatch) {
//   return bindActionCreators(CounterActions, dispatch);
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);


import React from 'react'
import Counter from '../containers/Counter';
import AddItem from '../containers/AddItem';
import VisibleItemsList from '../containers/VisibleItemsList';
require('../src/sass/style.scss');

const App = () => (
    <div>
        <Counter/>
        <AddItem/>
        <VisibleItemsList/>
    </div>
)

export default App
