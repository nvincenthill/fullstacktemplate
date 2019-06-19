import { combineReducers } from 'redux';

const initialState = {};

const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  initialReducer,
});

export default rootReducer;
