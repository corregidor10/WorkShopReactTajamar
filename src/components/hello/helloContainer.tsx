import {connect} from 'react-redux';
import {HolaReactComponent} from './hello';
import {State} from '../../reducers/' 


const mapStateToProps = (state:State) => ({
  
      username: state.userProfileState.firstname
   
  })
  
  const mapDispatchToProps = (dispatch:any) => {
    return {
    }
  }
  
  export const HelloWorldContainer = connect(
    mapStateToProps
    
  )(HolaReactComponent);
