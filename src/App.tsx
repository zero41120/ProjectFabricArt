import { createTheme, ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Cart } from './components/Cart';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { NotFound } from './components/NotFound';
import { Pricing } from './components/Pricing';
import { Product } from './components/Product';
import { Support } from './components/Support';
import { PrivacyPolicy } from './components/PrivacyPolicy';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#0577d6',
      },
      secondary: {
        main: '#df910c',
      },
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
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
