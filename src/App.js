import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import NavBar from './components/NavBar';
import HeaderSplash from './containers/HeaderSplash';
import AboutMe from './containers/AboutMe';
import Projects from './containers/Projects';
import Footer from './containers/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <HeaderSplash/>
      </header>
      <AboutMe/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
