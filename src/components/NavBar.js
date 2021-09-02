import React from "react";
import {
  makeStyles,
  useMediaQuery,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ResumePDF from "../YassineBoutaharResume2022.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    color: "#e0ebff",
    backgroundColor: "#333e5b",
    alignItems: "center",
  },
  toolbar: {
    width: "65%",
    margin: "0 calc(5vw - 24px) 0 0",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
  a: {
    color: "#e0ebff",
    "&:link": {
      textDecoration: "none",
    },
    "&:visited": {
      textDecoration: "none",
    },
    "&:hover": {
      textDecoration: "none",
    },
    "&:active": {
      textDecoration: "none",
    },
  },

  mobileMenuItem: {
    backgroundColor: "#333e5b",
  },
  paperChanger: {
    "& .MuiPaper-root": {
      backgroundColor: "#333e5b",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let appBar;
  if (useMediaQuery("(min-width:820px)")) {
    appBar = (
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          <AnchorLink offset="64" href="#Splash" className={classes.a}>
            Yassine Boutahar
          </AnchorLink>
        </Typography>

        <AnchorLink offset="64" href="#AboutMe" className={classes.a}>
          <Button color="inherit">About Me</Button>
        </AnchorLink>
        
        <AnchorLink offset="64" href="#Projects" className={classes.a}>
          <Button color="inherit">Projects</Button>
        </AnchorLink>
        <
          Button
          color="inherit"
          href={ResumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.a}
        >
          Resume
        </Button>
        
        <Button
          color="inherit"
          href="mailto:yassine@boutahar.dev"
          className={classes.a}
        >
          Email Me
        </Button>
      </Toolbar>
    );
  } else {
    appBar = (
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          <AnchorLink offset="56" href="#Splash" className={classes.a}>
            Yassine Boutahar
          </AnchorLink>
        </Typography>

        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon aria-controls="simple-menu" aria-haspopup="true" />
        </IconButton>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className={classes.paperChanger}
        >
          <MenuItem onClick={handleClose} className={classes.mobileMenuItem}>
            <AnchorLink offset="56" href="#AboutMe" className={classes.a}>
              <Button color="inherit">About Me</Button>
            </AnchorLink>
          </MenuItem>

          <MenuItem onClick={handleClose} className={classes.mobileMenuItem}>
            <AnchorLink offset="56" href="#Projects" className={classes.a}>
              <Button color="inherit">Projects</Button>
            </AnchorLink>
          </MenuItem>

          <MenuItem onClick={handleClose} className={classes.mobileMenuItem}>
            <Button
              color="inherit"
              href={ResumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.a}
            >
              Resume
            </Button>
          </MenuItem>
          
          <MenuItem onClick={handleClose} className={classes.mobileMenuItem}>
            <Button
              color="inherit"
              href="mailto:yassineboutahar@cmail.carleton.ca"
              className={classes.a}
            >
              Email Me
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.bar}>
        {appBar}
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default NavBar;
