
import  dataReducer  from './data';
import  loginReducer from './loginReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    dataReducer,
    loginReducer
});