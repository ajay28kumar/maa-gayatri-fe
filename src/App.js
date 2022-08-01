
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
      <div className="App">Maa Gayatri TRADERS</div>
    </ThemeProvider>
  );
}

export default App;
