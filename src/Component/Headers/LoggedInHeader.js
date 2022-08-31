import { connect } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app';
import {firebaseConfig} from '../../firebaseSetup';
import { userAction } from '../../constant';
import logoutAction from '../../action/logoutAction';

firebase.initializeApp(firebaseConfig);

const LoggedInHeader = props => {
  let navigate = useNavigate();
  const onLogoutClick = () => {
    props.logoutClickAction({apiState: userAction.REQUEST})
    firebase.auth().signOut()
    .then(() => {
      props.logoutClickAction({apiState: userAction.SUCCESS})
      navigate("/")
    }).
    catch(() => {
      props.logoutClickAction({apiState: userAction.ERROR})
    })
  }
  return (
      <AppBar position="static">
          <Toolbar>
          <Box sx={{ flexGrow: 1}}>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
          </Box>
            <Button color="inherit" onClick={onLogoutClick}>Logout</Button>
          </Toolbar>
        </AppBar>
  );
}





export default connect(null, {logoutClickAction : logoutAction})(LoggedInHeader);