import {actionTypes} from '../common/actionTypes';
import { Action } from '../model/action';

export const updateUserProfileName = (newName : string): Action => ({  
    type: actionTypes.UPDATE_USERPROFILE_NAME,
    payload : newName,  
});
