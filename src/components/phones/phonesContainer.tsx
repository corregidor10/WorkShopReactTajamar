import { PhoneListComponent } from './phoneComponent';
import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { Phone } from '../../model/';
import { phoneRequestAction } from '../../actions/getPhoneList';

const mapStateToProps = (state: State) => {

    return {
        phones: state.phones

    }
};


const mapDispatchToProps = (dispatch: any) => ({
   
        loadPhones: () =>  dispatch(phoneRequestAction())
   
});

export const PhoneListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneListComponent);