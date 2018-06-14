import { connect } from 'react-redux';
import { NameEditComponent } from './nameEdit';
import {updateUserProfileName} from '../../actions/updateUserProfilename';
import { State } from '../../reducers'

const mapStateToProps = (state : State) => {
  return {
    initialUserName: state.userProfileState.firstname
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNameUpdated: (name : string) => dispatch(updateUserProfileName(name))
  }
}

export const NameEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameEditComponent);