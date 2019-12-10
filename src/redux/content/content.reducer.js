import contentActionTypes from './content.types';
import roRuContent from './LANGUAGES_DATA';
const INITIAL_STATE = {
  allContent: roRuContent,
  selectedLanguage: 'russian'
}
const contentReducer = (state=INITIAL_STATE, action)=>{
  switch(action.type){
    case contentActionTypes.LANGUAGE_STATUS_RU:
      return {
        ...state, selectedLanguage: 'russian'
      };
    case contentActionTypes.LANGUAGE_STATUS_RO:
      return {
        ...state, selectedLanguage: 'romanian'
      };
    default: return state;
  }
}
export default contentReducer;