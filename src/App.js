
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import { Container } from '@mui/material';
import AppRoute from "./Router";

export const themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={themeOptions}>
      <Container maxWidth="false" style={{ padding: 0 }}>
        <AppRoute/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
