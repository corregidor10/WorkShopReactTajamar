import { actionTypes } from '../common/actionTypes';
import { Phone, Action } from '../model/';
import { phonesApi } from '../api/phones';

export const phoneRequestAction = () => (dispatch) => {

    phonesApi.GetAllPhones().then((result)=>{
        dispatch(phoneRequestCompleted(result))
    })
}

export const phoneRequestCompleted = (phones: Phone[]) => {
    return {
        type: actionTypes.GET_ALL_PHONES,
        payload: phones
    }
}