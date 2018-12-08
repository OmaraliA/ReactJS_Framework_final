import { combineReducers } from 'redux';
import WinnerReducer from './WinnerReducers'


const rootReducer = combineReducers({
  trips: WinnerReducer,

})

export default rootReducer;
