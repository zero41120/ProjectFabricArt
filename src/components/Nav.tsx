import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const pages = [
  ['產品一覽', '/product'],
  ['常見問答', '/support'],
  ['聯絡我們', '/about'],
];

export const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', sm: 'flex' } }}>
              LOGO
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
            >
              {pages.map(([page, url]) => (
                <Link key={page} to={url}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Link to="/">
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
              LOGO
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            {pages.map(([page, url]) => (
              <Link key={page} to={url}>
                <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: '#202327', display: 'block' }}>
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Link to="/cart">
            <Button sx={{ my: 2, color: '#202327', flexGrow: 0, display: 'flex', alignItems: 'center' }}>
              <ShoppingCartIcon></ShoppingCartIcon>
              <Typography>購物車</Typography>
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
