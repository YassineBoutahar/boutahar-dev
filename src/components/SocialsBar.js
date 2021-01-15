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
    "-webkit-animation": `$fadein 4400ms ${theme.transitions.easing.sharp}`,
    animation:`$fadein 4400ms ${theme.transitions.easing.sharp}`,
  },
  "second": {
    "-webkit-animation": `$fadein 4500ms ${theme.transitions.easing.sharp}`,
    animation:`$fadein 4500ms ${theme.transitions.easing.sharp}`,
  },
  "third": {
    "-webkit-animation": `$fadein 4600ms ${theme.transitions.easing.sharp}`,
    animation:`$fadein 4600ms ${theme.transitions.easing.sharp}`,
  },
  "fourth": {
    "-webkit-animation": `$fadein 4700ms ${theme.transitions.easing.sharp}`,
    animation:`$fadein 4700ms ${theme.transitions.easing.sharp}`,
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

  mediumRoot: {
    marginTop: "1rem",
    width: "90%"
  },
  smallRoot: {
    marginTop: "1rem",
    width: "13rem"
  },
  "mobileFirst": {
    "-webkit-animation": `$fadein 1600ms ${theme.transitions.easing.sharp}`,
    animation:`$fadein 1600ms ${theme.transitions.easing.sharp}`,
  },
  "mobileSecond": {
    "-webkit-animation": `$fadein 1700ms ${theme.transitions.easing.sharp}`,
    animation:`$fadein 1700ms ${theme.transitions.easing.sharp}`,
  },
  "mobileThird": {
    "-webkit-animation": `$fadein 1800ms ${theme.transitions.easing.sharp}`,
    animation:`$fadein 1800ms ${theme.transitions.easing.sharp}`,
  },
  "mobileFourth": {
    "-webkit-animation": `$fadein 1900ms ${theme.transitions.easing.sharp}`,
    animation:`$fadein 1900ms ${theme.transitions.easing.sharp}`,
  },
}));

const SocialsBar = (props) => {
  const classes = useStyles();
  let rootclass = classes.root
  let firstClass = classes.first;
  let secondClass = classes.second;
  let thirdClass = classes.third;
  let fourthClass = classes.fourth;

  if(props.variant === "medium"){
    rootclass = classes.mediumRoot;
  }
  else if(props.variant === "small"){
    rootclass = classes.smallRoot;
    firstClass = classes.mobileFirst;
    secondClass = classes.mobileSecond;
    thirdClass = classes.mobileThird;
    fourthClass = classes.mobileFourth;
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" className={rootclass}>
      <a href="https://www.linkedin.com/in/yassineboutahar/" target="_blank" rel="noopener noreferrer" className={`${classes.endIcon} ${firstClass}`}><LinkedInIcon className={classes.icon}/></a>
      <a href="https://github.com/yassineboutahar" target="_blank" rel="noopener noreferrer" className={secondClass}><GithubIcon className={classes.icon}/></a>
      <a href={ResumePDF} target="_blank" rel="noopener noreferrer" className={thirdClass}><ResumeIcon className={classes.icon}/></a>
      <a href="mailto:yassine@boutahar.dev" target="_blank" rel="noopener noreferrer" className={`${classes.endIcon} ${fourthClass}`}><EmailIcon className={classes.icon}/></a>
    </Box>
  );
}

export default SocialsBar;
