import {
  combineReducers
} from 'redux';
import {
  routerReducer
} from 'react-router-redux';
import user from './user';
import companyInfo from './companyInfo';

export default combineReducers({
  router: routerReducer,
  user,
  companyInfo
})