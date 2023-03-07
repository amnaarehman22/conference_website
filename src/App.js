import React from 'react'

import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers';
import {CTA, Brand, Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <div className='gradient__bg'>
        <Brand />
      </div>      
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
