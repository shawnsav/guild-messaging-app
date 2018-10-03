import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import chat from './Components/Chat/reducers';
import users from './Components/Users/reducers';

// const enhancer = composeWithDevToolsExtension
//   ? composeWithDevToolsExtension(applyMiddleware(thunk))
//   : applyMiddleware(thunk);

const rootReducer = combineReducers(
  {
    users,
    chat,
  },
  applyMiddleware(thunk),
);

export default rootReducer;
