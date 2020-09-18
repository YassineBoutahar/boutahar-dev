import React from 'react';
import { makeStyles, Box, Typography, Divider } from '@material-ui/core';

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
    color: "#cea842"
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
  image: {
    width: "80%",
    height: "auto",
    display: "block",
    margin: "auto",
    verticalAlign: "middle"
  },
  col: {
    "flex-basis": 0,
    "flex-grow": 1,
    marginLeft: "15px",
    marginRight: "15px",
  },
}));

const ProjectBlock = (props) => {
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.root}>
      <Box display="flex" flexDirection="column" alignContent="flex-start" className={classes.col}>
        <div className={classes.blockHeader}>
          <Typography variant="h3">
            <a className={classes.blockHeader} href={props.link}>{props.title}</a>
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            {props.languages}
          </Typography>
        </div>
        {props.children}
        <Typography variant="subtitle1" className={classes.demoLink}>
          { props.link ? <a className={classes.demoLink} href={props.link}>Try the demo here</a> : "" }
        </Typography>
      </Box>

      <Box display="flex" className={classes.col}>
        <a href={props.link}>
          <img src={props.img} alt={props.alt} className={classes.image}/>
        </a>
      </Box>
    </Box>
  );
}

export default ProjectBlock;
