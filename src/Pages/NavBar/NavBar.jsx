import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import { Container } from '@mui/material';

import NavUser from './NavUser';
import NavLogReg from './NavLogReg';



const drawerWidth = 240;
const navItems = [
  <NavLink to="/"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-white border-b-4 border-white font-bold" : "font-bold text-white"}>HOME
  </NavLink>,
  <NavLink to="/surveys"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-white border-b-4 border-white font-bold" : "font-bold text-white"}>SURVEYS
  </NavLink>,
  <NavLink to="/aboutUs"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-white border-b-4 border-white font-bold" : "font-bold text-white"}>ABOUTUS
  </NavLink>,
  <NavLink to="/contactUs"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-white border-b-4 border-white font-bold" : "font-bold text-white"}>CONTACTUS
  </NavLink>,
  <NavLogReg></NavLogReg>,
  <NavUser></NavUser>
];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: '#612875' }}>
          <Container maxWidth="xl" sx={{ height: 88 }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                <Link to='/'>
                  <div className='flex gap-1 pt-[16px]'>
                    <h1 className='font-bold text-2xl'>SURVEY</h1>
                    <h1 className='font-bold text-2xl rounded-s-full'>.</h1>
                  </div>
                </Link>
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block', paddingTop: 16 } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </div>
  );
}

export default NavBar;
