import React from 'react';
import { makeStyles, useMediaQuery, Typography, Box, Divider } from '@material-ui/core';
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

  mobileContent: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  mobileTitle: {
    color: "#cea842",
    textAlign: "left",
    marginLeft: "1rem",
  },
  mobileDivider: {
    margin: "0.2rem 2rem 0 1rem",
    backgroundColor: "#cea842",
    height: "3px",
  },
}));

const Projects = (props) => {
  const classes = useStyles();
  const desktop = useMediaQuery('(min-width:1020px)');

  let contentClass = desktop ? classes.content : classes.mobileContent;
  let titleClass = desktop ? classes.title : classes.mobileTitle;
  let dividerClass = desktop ? classes.divider : classes.mobileDivider;
  let titleFont = desktop ? "h1" : "h2";

  return (
    <ScrollableAnchor id={'Projects'}>
      <Box display="flex" justifyContent="center" className={classes.root}>
        <Box className={contentClass}>
          <Typography variant={titleFont} className={titleClass}>
            Projects
          </Typography>
          <Divider className={dividerClass}/>
          <ProjectBlock img={exampleGif} title="FindLivingSpace" languages="Node.js, MongoDB, Python, React" alt="FindLivingSpace Demo" link="https://findlivingspace.boutahar.dev/">
            <Typography variant="subtitle1" className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet metus facilisis, sodales velit vitae, pellentesque dolor. Donec maximus dolor tempus magna eleifend, et posuere mauris luctus. Class aptent taciti sociosqu ad litora torquent.
            </Typography>
          </ProjectBlock>
          <Divider className={classes.blockDivider}/>
          <ProjectBlock img={exampleGif} title="3K5 Books" languages="Node.js, PostgreSQL, React" alt="3K5 Books Demo" link="https://findlivingspace.boutahar.dev/">
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
