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
import AddEvent from '../containers/AddEvent';

const App = () => (
    <div>
      <Counter/>
      <AddEvent/>
    </div>
)

export default App
