import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Scroll from './scroll';
import Nav from './nav';
import Footer from './footer';
import Home from './home'
import About from './about'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
      <Scroll />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);