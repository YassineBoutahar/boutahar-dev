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
    topMargin: "15px",
  },
}));

const MainTitle = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        <Typed
        strings={['Welcome,']}
            smartBackspace={true}
            typeSpeed={80}
            backDelay={800}
            showCursor={false}
            onComplete={ (self) => { /*self.cursor.remove();*/ self.stop(); } }>
        </Typed>
      </Typography>
      <Typography variant="h1" className={classes.title}>
        <Typed
        strings={["I'm Yassine!", "I'm Yassine!", "I'm Yassine! :)", "I'm Yassine!"]}
            smartBackspace={true}
            typeSpeed={80}
            backSpeed={80}
            showCursor={false}
            startDelay={1700}
            onComplete={ (self) => { /*self.cursor.remove();*/ self.stop(); } }>
        </Typed>
      </Typography>
    </Box>
  );
}

export default MainTitle;
