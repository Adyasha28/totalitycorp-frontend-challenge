import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/girl.jpg';

const PrimarySearchAppBar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const location = useLocation();
  const drawerWidth = 0;

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="fixed" sx={{  boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',      
    width:{sm:`calc(100% - ${drawerWidth}px)` } ,
    marginLeft: {sm: drawerWidth},
    background: 'linear-gradient(90deg, rgba(70,1,92,1) 15%, rgba(143,203,196,1) 34%, rgba(47,70,185,1) 52%, rgba(240,168,241,1) 70%, rgba(11,10,119,1) 85%)', color:'white',
  }} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" sx={{    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',}} color="inherit">
            <img src={logo} alt="femme-power" height="30px"/>  Femme-Power
          </Typography>
          <div sx={{ flexGrow: 1}} />
          {location.pathname === '/' && (
          <div sx={{ marginRight: 2, display: {sm:'none'},}}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;