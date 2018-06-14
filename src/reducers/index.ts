
import { combineReducers} from 'redux';
import { userProfileReducer } from './userProfileReducer';
import {UserProfile, Phone} from '../model/'
import { phoneListReducer } from './phoneReducer';

export interface State {
    userProfileState : UserProfile
    phones: Phone[]
};

export const reducers = combineReducers<State>({
  userProfileState: userProfileReducer,
  phones:phoneListReducer
});

