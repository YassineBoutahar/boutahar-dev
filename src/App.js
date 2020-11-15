import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NavBar from './components/NavBar';
import HeaderSplash from './containers/HeaderSplash';
import AboutMe from './containers/AboutMe';
import Projects from './containers/Projects';
import Footer from './containers/Footer';
import './App.css';

const App = () => {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Yassine Boutahar</title>
            <link rel="canonical" href="https://www.boutahar.dev/" />
        </Helmet>
        <header className="App-header">

        </header>
        <NavBar/>
        <HeaderSplash/>
        <AboutMe/>
        <Projects/>
        <Footer/>
      </div>
    </HelmetProvider>
  );
}

export default App;
