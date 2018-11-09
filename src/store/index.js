import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ?
  window.devToolsExtension() :
  undefined
)
export default createStore(reducer,enhancer);