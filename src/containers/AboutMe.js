import React from "react";
import WideContainer from "./WideContainer";
import AboutBlock from "../components/AboutBlock";
import { makeStyles, useMediaQuery, Typography } from "@material-ui/core";
import shopifyLogo from "../images/shopify.png";
import alexaLogo from "../images/alexa.png";
import carletonLogo from "../images/carleton.png";
import gocLogo from "../images/goc.png";
import signiantLogo from "../images/smaller_signiant.png";
import apptionLogo from "../images/smaller_apption.png";
import bd2iLogo from "../images/smaller_bd2i.png";
import mobileShopifyLogo from "../images/mobile_shopify.png";
import mobileAlexaLogo from "../images/mobile_alexa.png";
import mobileCarletonLogo from "../images/mobile_carleton.png";
import mobileGocLogo from "../images/mobile_goc.png";
import mobileSigniantLogo from "../images/mobile_signiant.png";
import mobileApptionLogo from "../images/mobile_apption.png";
import mobileBd2iLogo from "../images/mobile_bd2i.png";

const useStyles = makeStyles((theme) => ({
  root: {},
  description: {
    color: "#e0ebff",
    textAlign: "left",
  },
  a: {
    color: "#cea842",
  },
  ul: {
    "list-style-type": "square",
  },
}));

const AboutMe = (props) => {
  const classes = useStyles();
  const desktop = useMediaQuery("(min-width:1020px)");
  let shopify = desktop ? shopifyLogo : mobileShopifyLogo;
  let alexa = desktop ? alexaLogo : mobileAlexaLogo;
  let carleton = desktop ? carletonLogo : mobileCarletonLogo;
  let signiant = desktop ? signiantLogo : mobileSigniantLogo;
  let apption = desktop ? apptionLogo : mobileApptionLogo;
  let bd2i = desktop ? bd2iLogo : mobileBd2iLogo;
  let goc = desktop ? gocLogo : mobileGocLogo;

  return (
    <div id="AboutMe">
      <WideContainer variant="grey">
        <AboutBlock
          img={carleton}
          alt="Carleton University"
          title="About Me"
          link="https://carleton.ca/scs/"
        >
          <Typography variant="subtitle1" className={classes.description}>
            I am a fourth year student in Carleton University's Computer Science
            Honours program with a minor in psychology. I have picked up many frontend
            and backend skills through school and my internship experiences and am
            passionate about applying them to my own personal projects.
          </Typography>
        </AboutBlock>
      </WideContainer>

      <WideContainer>
        <AboutBlock
          img={shopify}
          alt="Shopify"
          title="Fall 2021"
          link="https://www.shopify.ca/"
        >
          <Typography variant="subtitle1" className={classes.description}>
            Incoming Backend Developer Intern at{" "}
            <a
              className={classes.a}
              href="https://www.shopify.ca/"
            >
              <b>Shopify</b>
            </a>{" "}
            on the Product Discovery team in the Core Product org.
          </Typography>
        </AboutBlock>
      </WideContainer>

      <WideContainer variant="grey">
        <AboutBlock
          img={alexa}
          alt="Alexa"
          title="Summer 2021"
          link="https://www.amazon.com/alexa-drop-in-calling-intercom/b?ie=UTF8&node=21393410011"
        >
          <Typography variant="subtitle1" className={classes.description}>
            Worked as a Software Developer Engineer intern at{" "}
            <a
              className={classes.a}
              href="https://www.amazon.com/alexa-drop-in-calling-intercom/b?ie=UTF8&node=21393410011"
            >
              <b>Amazon</b>
            </a>{" "}
            under the Alexa Communications org. Designed and implemented my own intern project
            tracking EC2 usage of my team's internal customers through a serverless backend,
            displaying usage statistics through a frontend console and offloading any related AWS bills.
            <ul className={classes.ul}>
              <li>Frontend development - React, AWS Polaris</li>
              <li>
                Backend development - Java, Python, Typescript, Node.js, GraphQL
              </li>
              <li>AWS - EC2, Lambda, Timestream, CDK, EventBridge, CloudWatch</li>
              <li>Testing - Jest, Mockito, Internal Integ Test Tool</li>
            </ul>
          </Typography>
        </AboutBlock>
      </WideContainer>

      <WideContainer>
        <AboutBlock
          img={goc}
          alt="Department of National Defence"
          title="Winter 2021"
          link="https://www.canada.ca/"
        >
          <Typography variant="subtitle1" className={classes.description}>
            Worked as a full stack developer for the Federal Government of
            Canada within the Department of National Defence.
          </Typography>
        </AboutBlock>
      </WideContainer>

      <WideContainer variant="grey">
        <AboutBlock
          img={signiant}
          alt="Signiant"
          title="Fall 2020"
          link="https://www.signiant.com/"
        >
          <Typography variant="subtitle1" className={classes.description}>
            Worked at{" "}
            <a className={classes.a} href="https://www.signiant.com/">
              <b>Signiant</b>
            </a>{" "}
            as a Fullstack Developer co-op, primarily on the{" "}
            <a
              className={classes.a}
              href="https://www.signiant.com/products/signiant-manager/"
            >
              Manager+Agents
            </a>{" "}
            product and cross-product React dashboard.
            <ul className={classes.ul}>
              <li>Frontend development - React</li>
              <li>
                Backend development - Javascript, Node.js, AWS Lambda, DynamoDB
              </li>
              <li>Testing - Storybook, Jest</li>
            </ul>
          </Typography>
        </AboutBlock>
      </WideContainer>

      <WideContainer>
        <AboutBlock
          img={apption}
          alt="Apption"
          title="Summer 2020"
          link="https://www.apption.com/"
        >
          <Typography variant="subtitle1" className={classes.description}>
            Worked at{" "}
            <a className={classes.a} href="https://www.apption.com/">
              <b>Apption</b>
            </a>{" "}
            as a Fullstack Developer co-op, primarily on the{" "}
            <a className={classes.a} href="https://www.datahunter.ai/">
              Datahunter
            </a>{" "}
            product and{" "}
            <a
              className={classes.a}
              href="https://returntoplay.canadasoccer.com/"
            >
              Return to Play
            </a>{" "}
            website.
            <ul className={classes.ul}>
              <li>Frontend development - Blazor, React</li>
              <li>Backend development - .NET Core, C#, Javascript, Node.js</li>
              <li>Data visualizations - D3.js</li>
              <li>DevOps - Azure DevOps</li>
              <li>Testing - TestCafe, NUnit</li>
            </ul>
          </Typography>
        </AboutBlock>
      </WideContainer>

      <WideContainer variant="grey">
        <AboutBlock
          img={bd2i}
          alt="BD2I"
          title="Summer 2019"
          link="http://www.bd2i.ai/"
        >
          <Typography variant="subtitle1" className={classes.description}>
            Interned at{" "}
            <a className={classes.a} href="http://www.bd2i.ai/">
              <b>BD2I</b>
            </a>{" "}
            as a Mobile Application Developer, prototyping a currently
            unreleased mobile product, and training/integrating a PyTorch ML
            model.
            <ul className={classes.ul}>
              <li>
                Frontend/Backend development - Swift, Java, Firebase, Node.js
              </li>
              <li>Machine Learning - PyTorch, Jupyter</li>
              <li>Cloud Infrastructure - Google Cloud Platform</li>
            </ul>
          </Typography>
        </AboutBlock>
      </WideContainer>
    </div>
  );
};

export default AboutMe;
