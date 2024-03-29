import React from "react";
import {
  makeStyles,
  useMediaQuery,
  Typography,
  Box,
  Divider,
} from "@material-ui/core";
import ProjectBlock from "../components/ProjectBlock";
import webLineDemo from "../images/WebLineDemo.mp4";
import portfolioBuilderDemo from "../images/PortfolioBuilderDemo.mp4";
import findLivingSpaceDemo from "../images/FindLivingSpaceDemo.mp4";
// import threeKFiveBooksDemo from "../images/3K5BooksDemo.mp4";
import theShoppiesDemo from "../images/TheShoppiesDemo.mp4";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1a2139",
    paddingTop: "2rem",
  },
  content: {
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
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
  ul: {
    "list-style-type": "square",
  },

  mobileContent: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
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
  const desktop = useMediaQuery("(min-width:1020px)");

  let contentClass = desktop ? classes.content : classes.mobileContent;
  let titleClass = desktop ? classes.title : classes.mobileTitle;
  let dividerClass = desktop ? classes.divider : classes.mobileDivider;
  let titleFont = desktop ? "h2" : "h3";

  return (
    <Box
      display="flex"
      justifyContent="center"
      className={classes.root}
      id="Projects"
    >
      <Box className={contentClass}>
        <Typography variant={titleFont} className={titleClass}>
          Projects
        </Typography>

        <Divider className={dividerClass} />
        <ProjectBlock
          vid={webLineDemo}
          title="WebLine"
          languages="WebRTC, Typescript, React, Node.js, AWS WebSocket, DynamoDB"
          alt="WebLine Demo"
          link={desktop ? "https://webline.boutahar.dev/" : null}
        >
          <Typography variant="subtitle1" className={classes.description}>
            A decentralized peer-to-peer video calling platform built on pure
            WebRTC and React.
            <ul className={classes.ul}>
              <li>
                Implements the standard WebRTC signalling process between peers
                through an AWS WebSocket API Gateway
              </li>
              <li>
                WebRTC along with STUN and TURN servers are leveraged to allow
                for direct peer-to-peer and decentralized video communication
              </li>
              <li>
                A WebRTC data channel is created to enable text chat within a side
                drawer
              </li>
              <li>
                Easy to remember and randomly generated usernames are kept in
                DynamoDB to link users to their WebSocket connection IDs
              </li>
              <li>
                Dynamic interface with draggable and resizable local camera view
              </li>
            </ul>
          </Typography>
        </ProjectBlock>

        <Divider className={classes.blockDivider} />
        <ProjectBlock
          vid={portfolioBuilderDemo}
          title="Portfolio Builder"
          languages="Typescript, React, Node.js, DynamoDB, Elastic Beanstalk"
          alt="Portfolio Builder Demo"
          link="https://portfoliobuilder.boutahar.dev/"
        >
          <Typography variant="subtitle1" className={classes.description}>
            A web app to facilitate the building, sharing and analysis of a
            personal financial portfolio.
            <ul className={classes.ul}>
              <li>
                Pulls financial data including, stock names, prices and
                historical data from Yahoo Finance through a Node.js proxy
                server
              </li>
              <li>
                Allows users to add stocks, assign them percentages of their
                overall portfolio value, and calculate number of shares to buy
              </li>
              <li>
                Conveniently plots historical portfolio data and breakdowns
                using Chart.js
              </li>
              <li>
                Search bar supports ticker autocomplete and trending/recommended
                stocks, backed by Yahoo Finance statistics
              </li>
              <li>
                Lets users share their portfolio with a copiable share link
              </li>
            </ul>
          </Typography>
        </ProjectBlock>

        <Divider className={classes.blockDivider} />
        <ProjectBlock
          vid={findLivingSpaceDemo}
          title="FindLivingSpace"
          languages="Node.js, MongoDB, Python, React"
          alt="FindLivingSpace Demo"
          link={desktop ? "https://findlivingspace.boutahar.dev/" : null}
        >
          <Typography variant="subtitle1" className={classes.description}>
            An interactive platform that helps students find affordable housing
            within accessible distance of their work/university.
            <ul className={classes.ul}>
              <li>
                Populates MongoDB database with listings scraped from many
                renting sites using a Python script
              </li>
              <li>
                Dynamically plot accessible houses on a map using MapBox API
              </li>
              <li>
                Calculate walking distance between coordinates using Google Maps
                API
              </li>
              <li>
                Query Mongo database for listings that match user-defined
                criteria
              </li>
            </ul>
          </Typography>
        </ProjectBlock>

        <Divider className={classes.blockDivider} />
        <ProjectBlock
          vid={theShoppiesDemo}
          title="The Shoppies"
          languages="Node.js, React, Shopify Polaris"
          alt="Shoppies Demo"
          link="https://shoppies.boutahar.dev/"
        >
          <Typography variant="subtitle1" className={classes.description}>
            Nomination platform for a hypothetical Shopify movie awards event
            <ul className={classes.ul}>
              <li>Uses OMDB to fetch movies from user search queries</li>
              <li>
                Lets users nominate up to 5 movies and save their choices in
                local storage for convenience
              </li>
              <li>
                Allows users to share their nominations with a coverflow display
                using a shareable link
              </li>
            </ul>
          </Typography>
        </ProjectBlock>

        {/*<Divider className={classes.blockDivider} />
        <ProjectBlock
          vid={threeKFiveBooksDemo}
          title="3K5 Books"
          languages="Node.js, PostgreSQL, React"
          alt="3K5 Books Demo"
          link="https://lookinnabook-frontend.herokuapp.com/"
        >
          <Typography variant="subtitle1" className={classes.description}>
            Stores and retrieves various entities such as users, books, authors,
            orders, etc. in a PostgeSQL DB
            <ul className={classes.ul}>
              <li>Dynamic search function for finding books to order</li>
              <li>Register, login, add to cart and submit order features</li>
              <li>
                Admin mode for bookstore owner to manage book inventory and
                publisher payouts
              </li>
            </ul>
          </Typography>
        </ProjectBlock>*/}

        <Divider className={classes.blockDivider} />
        <ProjectBlock
          title="SpotiBio"
          languages="Node.js, HTML"
          alt="SpotiBio Demo"
        >
          <Typography variant="subtitle1" className={classes.description}>
            Updates your Instagram profile at a set interval to reflect your
            current or last played song on Spotify
            <ul className={classes.ul}>
              <li>
                Provides custom login screen to Instagram account and integrated
                Spotify login
              </li>
              <li>
                Queries user’s current or last played song using Spotify API at
                continuous interval
              </li>
              <li>
                Updates user’s Instagram account’s profile picture, biography
                and URL to match song
              </li>
            </ul>
          </Typography>
        </ProjectBlock>
      </Box>
    </Box>
  );
};

export default Projects;
