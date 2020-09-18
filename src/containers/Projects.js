import React from 'react';
import { makeStyles, Typography, Box, Divider } from '@material-ui/core';
import ProjectBlock from '../components/ProjectBlock';
import exampleGif from '../images/example.gif';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
configureAnchors({offset: -64, scrollDuration: 600});

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#1a2139",
    paddingTop: "2rem",
  },
  content: {
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  title: {
    color: "#cea842",
    textAlign: "left",
  },
  divider: {
    margin: "1rem 2rem 0 0",
    backgroundColor: "#cea842",
    height: "3px",
  },
  blockDivider: {
    margin: "0 60px 0 10px",
    backgroundColor: "#e0ebff",
    height: "0.5px",
  },
  description: {
    color: "#e0ebff",
    textAlign: "left",
  },
}));

const Projects = (props) => {
  const classes = useStyles();

  return (
    <ScrollableAnchor id={'Projects'}>
      <Box display="flex" justifyContent="center" className={classes.root}>
        <Box className={classes.content}>
          <Typography variant="h1" className={classes.title}>
            Projects
          </Typography>
          <Divider className={classes.divider}/>
          <ProjectBlock img={exampleGif} title="FindLivingSpace" languages="Node.js, MongoDB, Python, React" alt="FindLivingSpace Demo" link="https://findlivingspace.netlify.app/">
            <Typography variant="subtitle1" className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet metus facilisis, sodales velit vitae, pellentesque dolor. Donec maximus dolor tempus magna eleifend, et posuere mauris luctus. Class aptent taciti sociosqu ad litora torquent.
            </Typography>
          </ProjectBlock>
          <Divider className={classes.blockDivider}/>
          <ProjectBlock img={exampleGif} title="3K5 Books" languages="Node.js, PostgreSQL, React" alt="3K5 Books Demo" link="https://findlivingspace.netlify.app/">
            <Typography variant="subtitle1" className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec orci quam. Proin tellus ligula, congue quis lacus pulvinar, sagittis faucibus urna. Nullam a nulla at lacus viverra semper eget nec libero. Nam dignissim quam quam, at eleifend felis consectetur quis. Proin eget ornare ligula. Integer tempus lectus pharetra, posuere.
            </Typography>
          </ProjectBlock>
          <Divider className={classes.blockDivider}/>
          <ProjectBlock img={exampleGif} title="SpotiBio" languages="Node.js, HTML" alt="SpotiBio Demo">
            <Typography variant="subtitle1" className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu nunc ornare purus fringilla sagittis. Suspendisse fermentum ex tellus, eu tempus mauris rhoncus.
            </Typography>
          </ProjectBlock>
        </Box>
      </Box>
    </ScrollableAnchor>
  );
}

export default Projects;
