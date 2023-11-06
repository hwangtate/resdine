import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Scroll from './scroll';
import Nav from './nav';
import Footer from './footer';
import Home from './home'
import About from './about'
import Consultants from './consultants';
import Consulting from './consulting';
import Column from './column';
import Request from './request';
import Inquiry from './inquiry';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
      <Scroll />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/consultants/:consultantName' element={<Consultants/>} />
        <Route path='/consulting' element={<Consulting />} />
        <Route path='/column' element={<Column />} />
        <Route path='/request' element={<Request />} />
        <Route path='/inquiry' element={<Inquiry />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);