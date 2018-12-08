import { combineReducers } from 'redux';
import * as actionTypes from '../constants/ActionTypes';

const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_WINNERS_SUCCESS:
      return action.items;
    case actionTypes.ACTION_GET_WINNERS_STARTED:
    case actionTypes.ACTION_GET_WINNERS_FAILED:
      return [];
    default:
      return state;
  }
};

const post = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ACTION_CREATE_POST_SUCCESS:
      return action.post;
    case actionTypes.ACTION_CREATE_POST_STARTED:
      return {};
    default:
      return state;
  }
};


const winnerReducer = combineReducers({
    items,  
    post
});

export default winnerReducer;
