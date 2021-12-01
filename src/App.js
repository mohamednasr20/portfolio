import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
    </div>
  );
};

export default App;
