import React from 'react';
import { makeStyles, Box, Divider } from '@material-ui/core';
import FloatingIcons from '../components/FloatingIcons';
import MainTitle from '../components/MainTitle';
import SocialsBar from '../components/SocialsBar';
import ScrollableAnchor from 'react-scrollable-anchor';
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

    "-webkit-animation": `$increase 2500ms 3400ms`,
    "-moz-animation":    `$increase 2500ms 3400ms`,
    "-o-animation":      `$increase 2500ms 3400ms`,
    animation:         `$increase 2500ms 3400ms`,
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
    "-webkit-animation": `$fadein 3300ms ${theme.transitions.easing.sharp}`,
    animation:`$fadein 3300ms ${theme.transitions.easing.sharp}`,
  },
  "@-webkit-keyframes fadein": {
    "0%": { opacity: 0 },
    "66%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
  "@keyframes fadein": {
    "0%": { opacity: 0 },
    "66%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
}));

const HeaderSplash = () => {
  const classes = useStyles();

  return (
    <ScrollableAnchor id={'Splash'}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className={classes.root}>
        <FloatingIcons/>
        <Box
          display="flex"
          justifyContent="center"
          className={classes.container}>

          <Box display="flex" justifyContent="center" flexDirection="column" className={classes.colLeft}>
            <MainTitle/>
            <Divider className={classes.divider}/>
          </Box>

          <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" className={classes.colRight}>
            <img src={headshot} alt="headshot" className={classes.headshot} onContextMenu={(e)=> e.preventDefault()}/>
            <SocialsBar/>
          </Box>

        </Box>
      </Box>
    </ScrollableAnchor>
  );
}

export default HeaderSplash;
