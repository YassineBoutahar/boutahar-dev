import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Particles from 'react-particles-js';
import pythonIcon from '../Icons/python.svg';
import cppIcon from '../Icons/cpp.svg';
import csharpIcon from '../Icons/csharp.svg';
import htmlIcon from '../Icons/html.svg';
import javaIcon from '../Icons/java.svg';
import jsIcon from '../Icons/js.svg';
import pgsqlIcon from '../Icons/pgsql.svg';
import reactIcon from '../Icons/react.svg';
import reduxIcon from '../Icons/redux.svg';
import swiftIcon from '../Icons/swift.svg';
import letterYIcon from '../Icons/letterY.svg';
import letterBIcon from '../Icons/letterB.svg';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexFlow: "column",
    height: "calc(100vh - 64px)",
    width: "100%",
    backgroundColor: "#1a2139",
    position: "absolute",
    zIndex: 1001
  }
}));

const FloatingIcons = () => {
  const classes = useStyles();

  const particlesObject = {
      "particles": {
          "number": {
              "value": 2.5,
              "density": {
                  "enable": true,
                  "value_area": 100
              }
          },
          "color": {
              "value": "#d0bf92"
          },
          "shape": {
              "type": "image",
              "stroke": {
                  "width": 2,
                  "color": "#d0bf92"
              },
              "polygon": {
                  "nb_sides": 6
              },
              "images": [
                { "src": cppIcon, "width": 100, "height": 100 },
                { "src": csharpIcon, "width": 100, "height": 100 },
                { "src": htmlIcon, "width": 100, "height": 100 },
                { "src": javaIcon, "width": 100, "height": 100 },
                { "src": jsIcon, "width": 100, "height": 100 },
                { "src": pgsqlIcon, "width": 100, "height": 100 },
                { "src": pythonIcon, "width": 100, "height": 100 },
                { "src": reactIcon, "width": 100, "height": 100 },
                { "src": reduxIcon, "width": 100, "height": 100 },
                { "src": swiftIcon, "width": 100, "height": 100 },
                { "src": letterYIcon, "width": 100, "height": 100 },
                { "src": letterBIcon, "width": 100, "height": 100 },
              ]
          },
          "opacity": {
              "value": 0.5,
              "random": true
          },
          "size": {
              "value": 20,
              "random": true
          },
          "line_linked": {
              "enable": false,
              "distance": 200,
              "color": "#333e5b",
              "opacity": 0.3,
              "width": 2
          },
          "move": {
              "enable": true,
              "speed": 1.5,
              "direction": "bottom",
              "random": true,
              "straight": true,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
              }
          }
      },
      "interactivity": {
          "detect_on": "window",
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": [
                      "bubble"
                  ]
              },
              "onclick": {
                  "enable": true,
                  "mode": "push"
              },
              "resize": true
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "line_linked": {
                      "opacity": 0.7
                  }
              },
              "bubble": {
                  "distance": 200,
                  "size": 24,
                  "duration": 1,
                  "opacity": 1.0,
                  "speed": 0.5
              },
              "repulse": {
                  "distance": 100,
                  "duration": 2
              },
              "push": {
                  "particles_nb": 1
              },
              "remove": {
                  "particles_nb": 10
              }
          }
      },
  }

  return (
      <Particles
        className={classes.root}
        params={particlesObject}
      />
  );
}

export default FloatingIcons;
