import {combineReducers} from 'redux';
import user from './userReducer';
import auth from './authReducer';

import ajaxCallsInProgress from './ajaxStatusReducer';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  routing: routerReducer,
  user,
  auth,
  ajaxCallsInProgress
});

export default rootReducer;
