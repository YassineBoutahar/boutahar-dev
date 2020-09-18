import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import {ReactComponent as LinkedInIcon} from '../Icons/linkedin.svg';
import {ReactComponent as GithubIcon} from '../Icons/github.svg';
import {ReactComponent as ResumeIcon} from '../Icons/resume.svg';
import {ReactComponent as EmailIcon} from '../Icons/email.svg';
import ResumePDF from '../YassineBoutaharResume2021.pdf';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "1rem",
    width: "75%"
  },
  "icon": {
    fill: "#333e5b",
    stroke: "#e0ebff",
    strokeWidth: "1px",
    transform: "scale(1.3)",
  },
  "endIcon": {
    marginTop: "-4rem",
  },
  "first": {
    "-webkit-animation": `$fadein 6000ms ${theme.transitions.easing.sharp}`,
    animation:`$fadein 6000ms ${theme.transitions.easing.sharp}`,
  },
  "second": {
    "-webkit-animation": `$fadein 6100ms ${theme.transitions.easing.sharp}`,
    animation:`$fadein 6100ms ${theme.transitions.easing.sharp}`,
  },
  "third": {
    "-webkit-animation": `$fadein 6200ms ${theme.transitions.easing.sharp}`,
    animation:`$fadein 6200ms ${theme.transitions.easing.sharp}`,
  },
  "fourth": {
    "-webkit-animation": `$fadein 6300ms ${theme.transitions.easing.sharp}`,
    animation:`$fadein 6300ms ${theme.transitions.easing.sharp}`,
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

const SocialsBar = (props) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" className={classes.root}>
      <a href="https://www.linkedin.com/in/yassineboutahar/" target="_blank" rel="noopener noreferrer" className={`${classes.endIcon} ${classes.first}`}><LinkedInIcon className={classes.icon}/></a>
      <a href="https://github.com/yassineboutahar" target="_blank" rel="noopener noreferrer" className={classes.second}><GithubIcon className={classes.icon}/></a>
      <a href={ResumePDF} target="_blank" rel="noopener noreferrer" className={classes.third}><ResumeIcon className={classes.icon}/></a>
      <a href="mailto:yassineboutahar@cmail.carleton.ca" target="_blank" rel="noopener noreferrer" className={`${classes.endIcon} ${classes.fourth}`}><EmailIcon className={classes.icon}/></a>
    </Box>
  );
}

export default SocialsBar;
