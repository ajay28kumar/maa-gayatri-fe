import { useEffect } from "react"
import firebase from 'firebase/compat/app';
import { connect } from "react-redux";
import {firebaseConfig} from '../../firebaseSetup';
import { userAction } from "../../constant";
import initAppAction from '../../action/initAppAction';
import 'firebase/compat/auth';


firebase.initializeApp(firebaseConfig);

const LoginLoader = props => {
    useEffect(()=>{
        props.initAppAction({apiState: userAction.REQUEST });
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            props.initAppAction({apiState: userAction.SUCCESS,user});
          });
          // Make sure we un-register Firebase observers when the component unmounts.
          return () => unregisterAuthObserver(); 
    });
    return (
        <h1>Loading ... </h1>
    )
}


export default connect(null, {initAppAction})(LoginLoader);
