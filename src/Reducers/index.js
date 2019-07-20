import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';

const rootReducer = combineReducers({
  loginData: loginReducer,
  registerData: registerReducer,
});

export default rootReducer;