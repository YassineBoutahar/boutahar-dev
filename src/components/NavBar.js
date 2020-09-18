import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
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
  }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            <a href="#Splash" className={classes.a}>Yassine Boutahar</a>
          </Typography>
          <Button color="inherit" href="#AboutMe">About Me</Button>
          <Button color="inherit" href="#Projects">Projcts</Button>
          <Button color="inherit" href={ResumePDF} target="_blank" rel="noopener noreferrer">Resume</Button>
          <Button color="inherit" href="mailto:yassineboutahar@cmail.carleton.ca">Email Me</Button>
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </div>
  );
}

export default NavBar;
