import React from "react";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "50px 0",
    borderTop: "1px solid #232e4a",
    borderBottom: "1px solid #232e4a",
    boxShadow: "0 4px 2px -2px #1f2942",
  },
  white: {
    backgroundColor: "#333e5b",
  },
  grey: {
    backgroundColor: "#25314e",
  },
}));

const WideContainer = (props) => {
  const classes = useStyles();
  const variant = props.variant ? classes.grey : classes.white;

  return <Box className={`${classes.root} ${variant}`}>{props.children}</Box>;
};

export default WideContainer;
