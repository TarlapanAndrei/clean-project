import phoneCallActionTypes from './phoneCall.types';
const INITIAL_STATE = {
  phoneStatus: true
}
const phoneCallReducer = (state=INITIAL_STATE, action) =>{
  switch(action.type){
    case phoneCallActionTypes.TOGGLE_PHONE :
      return {
        ...state, phoneStatus: !state.phoneStatus
      }
    default: return state;
  }
}
export default phoneCallReducer;