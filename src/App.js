import React from 'react';
import { Helmet } from "react-helmet";
import NavBar from './components/NavBar';
import HeaderSplash from './containers/HeaderSplash';
import AboutMe from './containers/AboutMe';
import Projects from './containers/Projects';
import Footer from './containers/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Yassine Boutahar</title>
          <link rel="canonical" href="https://www.boutahar.dev/" />
      </Helmet>
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
