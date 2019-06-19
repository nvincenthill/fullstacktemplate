import React from 'react';
import { connect } from 'react-redux';

// const mapStateToProps = state => {
//     return { propName: state.Prop };
//   };

// const mapDispatchToProps => (dispatch) {
//     return {
//       actionName: (payload) => dispatch({type: actionName, payload: payload })
//     };
//  }

const ChildComponent = () => {
  return (
        <div></div>
  );
};

const connected = connect(mapStateToProps, mapDispatchToProps)(ChildComponent);

export default connected;
