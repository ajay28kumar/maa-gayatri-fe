import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import {Card} from "@mui/material";
import 'firebase/compat/auth';
import {firebaseConfig} from '../../firebaseSetup';

  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };
  firebase.initializeApp(firebaseConfig);

const Login = () => {
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh"
            }}
        >
            <Card variant="outlined" sx={{ width: '320px' }}>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </Card>
        </div>
        )
}

export default Login;
