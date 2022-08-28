import {Box,  Button, AppBar, Toolbar} from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from "react-router-dom";

const LoginHeader = () => {
  let navigate = useNavigate();
  const onLoginClick = () => navigate("/login");
  return (
      <AppBar position="static">
          <Toolbar>
          <Box sx={{ flexGrow: 1}}>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
          </Box>
            <Button color="inherit" onClick={onLoginClick}>Login</Button>
          </Toolbar>
        </AppBar>
  );
}

export default LoginHeader;