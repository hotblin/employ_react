import {
  combineReducers
} from 'redux';
import user from './user';
import companyInfo from './companyInfo';


// router 信息放到store中存储

export default combineReducers({
  user,
  companyInfo
})