import { useState, useEffect } from "react"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {firebaseConfig} from './firebaseSetup';
import AppRoute from "./Router";
import { connect } from "react-redux";
import initAppAction from './action/initAppAction';
import { userAction } from "./constant";

firebase.initializeApp(firebaseConfig);



const AppUI = (props) => {
    useEffect(()=>{
        props.initAppAction({apiState: userAction.REQUEST });
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            props.initAppAction({apiState: userAction.SUCCESS,user});
          });
          return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    },[])
    return (
        <AppRoute/>
    )
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, {initAppAction})(AppUI);
