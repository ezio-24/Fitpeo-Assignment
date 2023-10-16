import { useState, useEffect } from "react";
import { styled, alpha } from '@mui/material/styles';
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from '@mui/material/InputBase';

import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsIcon from "@mui/icons-material/Settings";
import profileImg from "../avatar/avatar.png";
import flagImg from "../avatar/flag.png";



function Header(props) {
  const { onDrawerToggle } = props;

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 30) setScrolled(true);
      else setScrolled(false);
    };
  }, []);


  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  })); 


  return (
    <AppBar
      sx={{ bgcolor: "#eaeff1", color: "inherit", transition:"all 0.2s ease-out" }}
      position="sticky"
      elevation={scrolled === true ? 4 : 0}
    >
      <Toolbar>
        <Grid container spacing={{ lg: 2, xs: 0.5 }} alignItems="center">
          <Grid item sx={{ display: { sm: "none", xs: "block" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={onDrawerToggle}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs>
            <Typography color="inherit" variant="h5" component="h1">
              Dashboard
            </Typography>
          </Grid>

          {/* search section */}
          <Grid item>
            {/* <IconButton color="inherit">
              <SearchIcon />
            </IconButton> */}
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Grid>
           
          
          <Grid item>
           {/* flag section */}
           <IconButton color="inherit">
              <Avatar
                src={flagImg}
                alt="My Avatar"
                sx={{ width: 36, height: 26, }}
              />
            </IconButton>
            <IconButton color="inherit">
              <Badge color="error">
                <WidgetsIcon color="inherit" />
              </Badge>
            </IconButton>

           
 
{/* Notification */}

            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon color="inherit" />
              </Badge>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="inherit">
              <Avatar
                src={profileImg}
                alt="My Avatar"
                sx={{ width: 26, height: 26 }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
