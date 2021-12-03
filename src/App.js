import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Store from './components/Projects/Store';
import { AnimateSharedLayout } from 'framer-motion/dist/es/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div>
      <AnimateSharedLayout type="crossfade">
        <Navbar />
        <Header />
        <About />
        <Router>
          <Route path={['/:id', '/']} component={Store} />
        </Router>
      </AnimateSharedLayout>
    </div>
  );
};

export default App;
