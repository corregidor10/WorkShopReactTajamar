import {UserProfile, Action} from '../model/';
import {actionTypes} from '../common/actionTypes'

const defaultUserState : () => UserProfile = () => ({
    firstname: 'Fernando Hierro'
  });

  export const userProfileReducer = (state:UserProfile = defaultUserState(), action:Action) => {
    
    switch(action.type){
      case actionTypes.UPDATE_USERPROFILE_NAME:
      return handleUserProfileAction(state, action);
    }
    return state;
  }
  const handleUserProfileAction = (state: UserProfile, action:Action) => {
    return {
      ...state,
      firstname: action.payload,
    };
  }
  