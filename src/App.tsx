import { createTheme, ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';
import './App.css';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
    },
    typography: {
      fontFamily: 'Noto Sans TC',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" color="initial">
        起飛
      </Typography>
    </ThemeProvider>
  );
}

export default App;
