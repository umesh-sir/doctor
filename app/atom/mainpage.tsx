"use client"
import * as React from 'react';
import SwipeableTextMobileStepper from "./carousel";
import { useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useRouter } from 'next/navigation';
import Apponitment from './appointment';
import About from './about';
import Feedback from './feedback';
import ResponsiveAppBar from './header';
import Header from './header';
 


const pages = ['Home', 'Pricing', 'Blog', 'About','Appointment','Feedback'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const MainPage = ()=>{
      const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
      const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
      const [anchorElAbout, setAnchorElAbout] = React.useState<null | HTMLElement>(null);
    
      const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const router = useRouter();
      const handleOpenAboutMenu = (event: React.MouseEvent<HTMLElement>) => {
        router.push('/about');
      };


      const targetRefappointment = useRef(null);
      const handleOpenAppointmentMenu = (event: React.MouseEvent<HTMLElement>) => {
            targetRefappointment.current?.scrollIntoView({ behavior: 'smooth' });
                  };

     const targetRefhome = useRef(null);
      const handleOpenHomeMenu = (event: React.MouseEvent<HTMLElement>) => {
            targetRefhome.current?.scrollIntoView({ behavior: 'smooth' });
      };

      const targetRefabout = useRef(null);
      const handleOpeAboutMenu = (event: React.MouseEvent<HTMLElement>) => {
            targetRefabout.current?.scrollIntoView({ behavior: 'smooth' });
      };

      const targetReffeedback = useRef(null);
      const handleOpeFeedbackMenu = (event: React.MouseEvent<HTMLElement>) => {
            targetReffeedback.current?.scrollIntoView({ behavior: 'smooth' });
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
    
      const handleCloseAboutMenu = () => {
        setAnchorElAbout(null);
      };

  

  

 return (
        <>
      
      {/* <AppBar position="static">
        
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              AUTOVYN
            </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
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
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={page === 'ABOUT' ? handleOpenAboutMenu :
                       page === '' ? handleOpenAppointmentMenu  :
                       page === 'Home' ? handleOpenHomeMenu  :
  
                        handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              <Menu
                id="menu-about"
                anchorEl={anchorElAbout}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElAbout)}
                onClose={handleCloseAboutMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem onClick={handleCloseAboutMenu}>
                  <Typography textAlign="center">Subitem 1</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseAboutMenu}>
                  <Typography textAlign="center">Subitem 2</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
            onClick={handleOpenUserMenu}
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              AUTOVYN
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={page === 'ABOUT' ? handleOpenAboutMenu:
                    page === '' ? handleOpenAppointmentMenu  :
                    page === 'Home' ? handleOpenHomeMenu  :
                    handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <a className='mr-10 bg-green-600 text-base p-1 px-3 rounded hover:cursor-pointer hover:scale-110'>Quick Call</a>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar> */}
        {/* <Header></Header> */}
        <marquee ref={targetRefhome} className="mt-20 text-lg bg-blue-300" >This is a scrolling text using the marquee tag!</marquee>
        <div  > <SwipeableTextMobileStepper /></div>
         {/* <div ref={targetRefappointment}><Apponitment/> </div> */}
         <div ref={targetRefabout}><About/> </div>
         {/* <div ref={targetReffeedback}><Feedback/></div> */}
         <div ref={targetRefabout}><About/> </div>
      </> 
 )   
}

export default MainPage;







