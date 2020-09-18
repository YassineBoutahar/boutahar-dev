import React from 'react';
import WideContainer from './WideContainer';
import AboutBlock from '../components/AboutBlock';
import { makeStyles, Typography } from '@material-ui/core';
import signiantLogo from '../images/smaller_signiant.png';
import apptionLogo from '../images/smaller_apption.png';
import bd2iLogo from '../images/smaller_bd2i.png';
import carletonLogo from '../images/smaller_carleton.png';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({offset: -64, scrollDuration: 600});

const useStyles = makeStyles(theme => ({
  root: {
  },
  description: {
    color: "#e0ebff",
    textAlign: "left",
  },
  a: {
    color: "#cea842",
  }
}));

const AboutMe = (props) => {
  const classes = useStyles();

  return (
    <ScrollableAnchor id={'AboutMe'}>
      <div>
        <WideContainer>
          <AboutBlock img={carletonLogo} alt="Carleton University" title="About Me" link="https://carleton.ca/scs/">
            <Typography variant="subtitle1" className={classes.description}>
              I'm a third year student in Carleton University's Computer Science Honours program with a minor in psychology. While I am usually studying out of Ottawa, Ontario, I am currently working from home in Toronto and seeeking opportunities for the 2021 Summer term.
            </Typography>
          </AboutBlock>
        </WideContainer>
        <WideContainer variant="grey">
          <AboutBlock img={signiantLogo} alt="Signiant" title="Fall 2020" link="https://www.signiant.com/">
            <Typography variant="subtitle1" className={classes.description}>
              I'm currently working at Signiant as a Fullstack Developer co-op, primarily on the <a className={classes.a} href="https://www.signiant.com/products/signiant-manager/">Manager+Agents</a> product.
            </Typography>
          </AboutBlock>
        </WideContainer>
        <WideContainer>
          <AboutBlock img={apptionLogo} alt="Apption" title="Summer 2020" link="https://www.apption.com/">
            <Typography variant="subtitle1" className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet pellentesque lectus sed tincidunt. Aliquam erat volutpat. Fusce arcu felis, facilisis id bibendum non, eleifend et metus. Praesent pellentesque ultrices leo sed suscipit. Curabitur sit amet libero nulla. Aenean lobortis.
            </Typography>
          </AboutBlock>
        </WideContainer>
        <WideContainer variant="grey">
          <AboutBlock img={bd2iLogo} alt="BD2I" title="Summer 2019" link="http://www.bd2i.ai/">
            <Typography variant="subtitle1" className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis laoreet malesuada. Pellentesque id auctor massa, at eleifend urna. Sed in molestie nisi. Sed vitae pretium turpis. Morbi eget ex in nibh.
            </Typography>
          </AboutBlock>
        </WideContainer>
      </div>
    </ScrollableAnchor>
  );
}

export default AboutMe;
