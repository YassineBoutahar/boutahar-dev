import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import ImLikely from '../components/ImLikely';
import LazyLoad from 'react-lazy-load';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#25314e",
    padding: "2rem 4rem 1rem 4rem",
  },
  content: {
    height: "100%",
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  imLikely: {
    color: "#cea842"
  },
  copyright: {
    color: "#e0ebff"
  }
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.root}>
      <Box display="flex" justifyContent="flex-end" flexDirection="column" className={classes.content}>
        <LazyLoad
          debounce={false}
          offsetVertical={250}
          >
          <Typography variant="h6" className={classes.imLikely}>
            <ImLikely/>
          </Typography>
        </LazyLoad>
        <Typography variant="caption" className={classes.copyright}>
          Copyright © Yassine Boutahar 2020
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
