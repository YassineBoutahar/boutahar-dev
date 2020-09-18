import React from 'react';
import { makeStyles, Box, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  blockHeader: {
    color: "#e0ebff",
    textAlign: "left",
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

const AboutBlock = (props) => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center" alignItems="center" className={classes.root}>
      <Box display="flex" flexDirection="column" alignContent="flex-start" className={classes.col}>
        <div className={classes.blockHeader}>
          <Typography variant="h4">
            {props.title}
          </Typography>
          <Divider className={classes.divider}/>
        </div>
        {props.children}
      </Box>

      <Box display="flex" className={classes.col}>
        <a href={props.link}>
          <img src={props.img} alt={props.alt} className={classes.image}/>
        </a>
      </Box>
    </Box>
  );
}

export default AboutBlock;
