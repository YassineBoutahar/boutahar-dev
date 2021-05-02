import React from 'react';
import { makeStyles, useMediaQuery, Box, Typography } from '@material-ui/core';
import LazyLoad from 'react-lazy-load';

const useStyles = makeStyles(theme => ({
  root: {
    margin: "4rem auto 4rem auto"
  },
  blockHeader: {
    color: "#e0ebff",
    textAlign: "left",
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
  demoLink: {
    textAlign: "left",
    color: "#cea842",
    marginLeft: "1em",
  },
  subtitle: {
    fontStyle: "oblique",
    color: "#cea842",
    margin: "0.5rem 0 0.5rem 0",
    fontSize: "1.1rem",
    fontWeight: 300
  },
  divider: {
    margin: "0.5rem 0.5rem 0.5rem 0",
    backgroundColor: "#cea842",
  },
  dividerVert: {
    backgroundColor: "#cea842",
    margin: "0 2rem 0 2rem",
  },
  col: {
    "flex-basis": 0,
    "flex-grow": 1,
    marginLeft: "15px",
    marginRight: "15px",
  },
  videoCol: {
    "flex-basis": 0,
    "flex-grow": 1,
    marginRight: "15px",
    paddingBottom: "2rem",
    verticalAlign: "middle",
  },

  mobileRoot: {
    margin: "2rem auto 2rem auto"
  },
}));
//width="320" height="240"
const ProjectBlock = (props) => {
  const classes = useStyles();
  const desktop = useMediaQuery('(min-width:1020px)');
  let rootClass = desktop ? classes.root : classes.mobileRoot;
  let imageBlock = null;
  let projectTitleFont = desktop ? "h3" : "h4";

  if(desktop){
    imageBlock = (
      <Box display="flex" alignItems="center" className={classes.videoCol}>
        <a href={props.link}>
          <LazyLoad
            debounce={false}
            offsetVertical={500}
            >
            <video width="85%" height="auto" autoPlay allowFullscreen loop muted>
              <source src={props.vid} type="video/mp4"/>
            </video>
          </LazyLoad>
        </a>
      </Box>
    );
  }

  return (
    <Box display="flex" className={rootClass}>
      <Box display="flex" flexDirection="column" alignContent="flex-start" className={classes.col}>
        <div className={classes.blockHeader}>
          <Typography variant={projectTitleFont}>
            <a className={classes.blockHeader} href={props.link}>{props.title}</a>
          </Typography>

          <Typography variant="subtitle1" className={classes.subtitle}>
            {props.languages}
          </Typography>
        </div>
        {props.children}
        
        <Typography variant="subtitle1" className={classes.demoLink}>
          { props.link ? <a className={classes.demoLink} href={props.link} target="_blank" rel="noopener noreferrer">Try the demo here</a> : "" }
        </Typography>
      </Box>

      {imageBlock}
    </Box>
  );
}

export default ProjectBlock;
