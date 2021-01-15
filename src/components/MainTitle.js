import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import Typed from 'react-typed';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 0,
    marginRight: "auto",
  },
  title: {
    textAlign: "left",
    color: "#cea842",
  },
}));

const MainTitle = (props) => {
  const classes = useStyles();
  let smallFont = "h2";
  let bigFont = "h1";

  if(props.variant === "medium"){
    smallFont = "h3";
    bigFont = "h2";
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      className={classes.root}>
      <Typography variant={smallFont} className={classes.title}>
        <Typed
        strings={['Welcome,']}
            smartBackspace={true}
            typeSpeed={80}
            backDelay={800}
            showCursor={false}
            startDelay={0}
            onComplete={ (self) => { /*self.cursor.remove();*/ self.stop(); } }>
        </Typed>
      </Typography>
      <Typography variant={bigFont} className={classes.title}>
        <Typed
        strings={["I'm Yassine!", "I'm Yassine!", "I'm Yassine! :)", "I'm Yassine!"]}
            smartBackspace={true}
            typeSpeed={80}
            backSpeed={80}
            showCursor={false}
            startDelay={1600}
            onComplete={ (self) => { /*self.cursor.remove();*/ self.stop(); } }>
        </Typed>
      </Typography>
    </Box>
  );
}

export default MainTitle;
