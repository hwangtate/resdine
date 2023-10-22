import React from 'react';
import { useLocation } from 'react-router-dom'; 
import './style/topnav.css';

function Topnav() {
  
  const location = useLocation();

  const currentPath = location.pathname;

  let title, subtitle, lineText;

  if (location.pathname === '/about') {
    title = '레스다인 소개';
    subtitle = 'ResDine은 Restaurant Dine Counsulting 의 줄임말입니다.';
    lineText = '레스다인 소개';
  } else if (currentPath.startsWith('/consultants')) {
    title = '컨설턴트 소개';
    subtitle = '레스다인 컨설턴트 소개입니다.';
    lineText = '컨설턴트 소개';
  } 

  return(
    <>
      <div id="background3">
        <h1 id="title3">{title}</h1> 
        <h2 id="subtitle3">{subtitle}</h2> 
      </div>
      <div id="linebox3">
        {lineText} 
      </div>
    </>
  );
}

export default Topnav;
