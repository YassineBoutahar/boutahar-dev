import React from 'react';
import { makeStyles, useMediaQuery, Box, Divider, Typography } from '@material-ui/core';
import FloatingIcons from '../components/FloatingIcons';
import MainTitle from '../components/MainTitle';
import SocialsBar from '../components/SocialsBar';
import headshot from '../images/smaller_headshot.png';

const useStyles = makeStyles(theme => ({
  root: {
    height: "calc(100vh - 64px)",
    width: "100%",
    backgroundColor: "#1a2139"
  },
  container: {
    zIndex: 1002,
    height: "100%",
    width: "70%",
    flexGrow: 1,
  },
  colLeft: {
    "flex-grow": 1,
  },
  colRight: {
    "flex-grow": 0,
    "marginRight": "2vw"
  },
  divider: {
    width: "0px",
    height: "2px",

    "-webkit-animation": `$increase 2500ms 1800ms`,
    "-moz-animation":    `$increase 2500ms 1800ms`,
    "-o-animation":      `$increase 2500ms 1800ms`,
    animation:         `$increase 2500ms 1800ms`,
    "animation-fill-mode": "forwards",
    backgroundColor: "#cea842",
  },
  "@keyframes increase": {
    "100%": {
      width: "80%",
    }
  },
  headshot: {
    width: "20rem",
    height: "auto",
    borderRadius: "50%",
    verticalAlign: "middle",
    "-webkit-animation": `$fadein 1700ms ${theme.transitions.easing.sharp}`,
    animation:`$fadein 1700ms ${theme.transitions.easing.sharp}`,
  },
  headshotMedium: {
    width: "15rem",
    height: "auto",
    borderRadius: "50%",
    verticalAlign: "middle",
    "-webkit-animation": `$fadein 1700ms ${theme.transitions.easing.sharp}`,
    animation:`$fadein 1700ms ${theme.transitions.easing.sharp}`,
  },
  headshotSmall: {
    width: "12rem",
    height: "auto",
    borderRadius: "50%",
    verticalAlign: "middle",
    "-webkit-animation": `$fadein 1400ms ${theme.transitions.easing.sharp}`,
    animation:`$fadein 1400ms ${theme.transitions.easing.sharp}`,
  },
  "@-webkit-keyframes fadein": {
    "0%": { opacity: 0 },
    "44%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
  "@keyframes fadein": {
    "0%": { opacity: 0 },
    "44%": { opacity: 0 },
    "100%": { opacity: 1 },
  },

  mobileContainer: {
    zIndex: 1002,
    height: "100%",
    width: "90%",
    flexGrow: 1,
  },
  mobileTitle: {
    textAlign: "left",
    color: "#cea842",
  },
  mobileDivider: {
    height: "2px",
    backgroundColor: "#cea842",
    width: "100%",
    marginBottom: "3rem",
  }
}));

const HeaderSplash = () => {
  const classes = useStyles();
  const large = useMediaQuery('(min-width:1550px)');
  const medium = useMediaQuery('(min-width:1020px)');
  let sizeVariant = large ? "" : "medium";
  let headshotClass = large ? classes.headshot : classes.headshotMedium;
  let inside;
  if(medium){
    inside = (
      <Box
        display="flex"
        justifyContent="center"
        className={classes.container}>

        <Box display="flex" justifyContent="center" flexDirection="column" className={classes.colLeft}>
          <MainTitle variant={sizeVariant}/>
          <Divider className={classes.divider}/>
        </Box>

        <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" className={classes.colRight}>
          <img src={headshot} alt="headshot" className={headshotClass} onContextMenu={(e)=> e.preventDefault()}/>
          <SocialsBar variant="medium"/>
        </Box>

      </Box>
    );
  }
  else{
    inside = (
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        className={classes.mobileContainer}>

        <div>
          <Typography variant="h4" className={classes.mobileTitle}>
            Welcome,
          </Typography>
          <Typography variant="h3" className={classes.mobileTitle}>
            I'm Yassine!
          </Typography>
          <Divider className={classes.mobileDivider}/>
        </div>

        <img src={headshot} alt="headshot" className={classes.headshotSmall} onContextMenu={(e)=> e.preventDefault()}/>
        <SocialsBar variant="small"/>

      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
      id="Splash">
      {medium ? <FloatingIcons/> : ""}
      {inside}
    </Box>
  );
}

export default HeaderSplash;
