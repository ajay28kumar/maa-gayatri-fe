import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { Container } from '@mui/material';
import AppUI from './AppUI';
import store from './store';

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
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeOptions}>
        <Container maxWidth='false' style={{ padding: 0 }}>
          <AppUI />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
