"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Home', 'Features', 'Portfolio'];
const settings = ['Blogs', 'About Me', 'Contact'];
const profile = ['Log Out', 'Account'];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [activeTab, setActiveTab] = React.useState<string>("home");


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const changePage = (tab: string) =>{
    setActiveTab(tab);
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{
      backgroundColor:"white",
      color:"black",
      width:"98%",
      margin:"5px auto",
      borderRadius:3
    }}>
      <Container>
        <Toolbar disableGutters>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              fontSize:25,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            className='!font-grafitti'
          >
            Javier
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap:3, alignItems:"center" }}>
          
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>changePage(page)}
                sx={{ my: 2, color: 'black', display: 'block', 
                textTransform:"capitalize",
                boxShadow:`${page===activeTab?"0px 2px 20px rgba(0, 0, 0, 0.5)":""}` 
              }}
              >
                {page}
              </Button>
            ))}
          </Box>
          


          <Box sx={{ flexGrow: 1, justifyContent:"end", display: { xs: 'none', md: 'flex' }, gap:3, alignItems:"center" }}>
            {settings.map((page) => (
              <Button
                key={page}
                onClick={()=>changePage(page)}
                sx={{ my: 2, color: 'black', display: 'block', 
                textTransform:"capitalize",
                boxShadow:`${page===activeTab?"0px 2px 20px rgba(0, 0, 0, 0.25)":""}`
               }}
              >
                {page}
              </Button>
            ))}
            <Tooltip title="Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/images/delmar.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {profile.map((item) => (
                <MenuItem key={item} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{
                    color:"black",
                    fontSize:12
                  }}>{item}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
