import { createTheme, ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Nav } from './components/Nav';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            color: '#202327',
            backgroundColor: '#fafafa',
          },
        },
      },
    },
    typography: {
      fontFamily: 'Noto Sans TC',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
