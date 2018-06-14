import { Phone, Action } from '../model/';
import { actionTypes } from '../common/actionTypes';

const createEmptyPhoneList = (): Phone[] => (
    []
);

export const phoneListReducer = (state = createEmptyPhoneList(), action: Action) => {
   
    switch (action.type) {
        case actionTypes.GET_ALL_PHONES:
            return handlePhonesCompleted(state, action);
    }
    return state;
};

const handlePhonesCompleted = (state: Phone[], action:Action) => {
    return action.payload;
};