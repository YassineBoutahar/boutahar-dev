import React from 'react';
import { makeStyles, useMediaQuery, AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ResumePDF from '../YassineBoutaharResume2021.pdf';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    color: "#e0ebff",
    backgroundColor: "#333e5b",
    alignItems: "center",
  },
  toolbar: {
    width: "65%",
    margin: "0 calc(5vw - 24px) 0 0",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
  a: {
    color: "#e0ebff",
    '&:link': {
      textDecoration: "none",
    },
    '&:visited': {
      textDecoration: "none",
    },
    '&:hover': {
      textDecoration: "none",
    },
    '&:active': {
      textDecoration: "none",
    },
  },

  menuButton: {
    '&:target': {
      transform: "rotate(90eg)",
      "-webkit-transform": "rotate(90deg)",
      "-ms-transform": "rotate(90deg)",
    },
  }
}));

const NavBar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let appBar;
  if(useMediaQuery('(min-width:820px)')){
    appBar = (
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          <a href="#Splash" className={classes.a}>Yassine Boutahar</a>
        </Typography>
        <Button color="inherit" href="#AboutMe">About Me</Button>
        <Button color="inherit" href="#Projects">Projcts</Button>
        <Button color="inherit" href={ResumePDF} target="_blank" rel="noopener noreferrer">Resume</Button>
        <Button color="inherit" href="mailto:yassineboutahar@cmail.carleton.ca">Email Me</Button>
      </Toolbar>
    );
  }
  else{
    appBar = (
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          <a href="#Splash" className={classes.a}>Yassine Boutahar</a>
        </Typography>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.menuButton}/>
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
        <MenuItem onClick={handleClose}><Button color="inherit" href="#AboutMe">About Me</Button></MenuItem>
        <MenuItem onClick={handleClose}><Button color="inherit" href="#Projects">Projects</Button></MenuItem>
        <MenuItem onClick={handleClose}><Button color="inherit" href={ResumePDF} target="_blank" rel="noopener noreferrer">Resume</Button></MenuItem>
        <MenuItem onClick={handleClose}><Button color="inherit" href="mailto:yassineboutahar@cmail.carleton.ca">Email Me</Button></MenuItem>
      </Menu>
      </Toolbar>
    );
  }



  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.bar}>
        {appBar}
      </AppBar>
      <Toolbar/>
    </div>
  );
}

export default NavBar;
