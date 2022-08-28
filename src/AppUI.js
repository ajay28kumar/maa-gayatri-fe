import { useEffect } from "react"
import firebase from 'firebase/compat/app';
import {firebaseConfig} from './firebaseSetup';
import AppRoute from "./Router";
import { connect } from "react-redux";
import initAppAction from './action/initAppAction';
import { userAction } from "./constant";
import 'firebase/compat/auth';

firebase.initializeApp(firebaseConfig);


const AppUI = (props) => {
    useEffect(()=>{
        props.initAppAction({apiState: userAction.REQUEST });
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            props.initAppAction({apiState: userAction.SUCCESS,user});
          });
          // Make sure we un-register Firebase observers when the component unmounts.
          return () => unregisterAuthObserver(); 
    },[props])
    return (
        <AppRoute/>
    )
}

const mapStateToProps = state => {
    const {userProfile} = state || {};
    return {
        ...userProfile
    }
}

export default connect(mapStateToProps, {initAppAction})(AppUI);
