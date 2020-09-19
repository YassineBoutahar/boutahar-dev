import React from 'react';
import { makeStyles, useMediaQuery, Typography, Box } from '@material-ui/core';
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
  },

  mobileRoot: {
    backgroundColor: "#25314e",
    padding: "1rem 0.5rem 1rem 0.5rem",
  },
  mobileContent: {
    height: "100%",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto"
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const desktop = useMediaQuery('(min-width:1020px)');
  let rootClass = desktop ? classes.root : classes.mobileRoot;
  let contentClass = desktop ? classes.content : classes.mobileContent;
  let imLikelyFont = desktop ? "h6" : "subtitle1";

  return (
    <Box display="flex" className={rootClass}>
      <Box display="flex" justifyContent="flex-end" flexDirection="column" className={contentClass}>
        <LazyLoad
          debounce={false}
          offsetVertical={250}
          >
          <Typography variant={imLikelyFont} className={classes.imLikely}>
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
