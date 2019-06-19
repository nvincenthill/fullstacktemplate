import React from 'react';
import { connect } from 'react-redux';
import { firstAction } from '../redux/actions';

const mapStateToProps = state => ({ counter: state.initialReducer.counter });

const mapDispatchToProps = dispatch => (
  { action: payload => (dispatch(firstAction(payload))) }
);

const ChildComponent = ({ counter, action }) => (
  <div onClick={() => action(++counter)}>{counter}</div>
);

const connected = connect(mapStateToProps, mapDispatchToProps)(ChildComponent);

export default connected;
