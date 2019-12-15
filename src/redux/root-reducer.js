import { combineReducers } from 'redux';
import contentReducer from './content/content.reducer';
import phoneCallReducer from './phoneCall/phoneCall.reducer';

export default combineReducers({
  content: contentReducer,
  phone: phoneCallReducer
});