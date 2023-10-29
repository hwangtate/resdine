import React from 'react';
import { useLocation } from 'react-router-dom'; 
import './style/topnav.css';

function Topnav() {
  
  const location = useLocation();

  const currentPath = location.pathname;

  let title, subtitle, lineText, backgroundId;

  if (location.pathname === '/about') {
    title = '레스다인 소개';
    subtitle = 'ResDine은 Restaurant Dine Counsulting 의 줄임말입니다.';
    lineText = '레스다인 소개'; 
    backgroundId = 'background3';
  } else if (currentPath.startsWith('/consultants')) {
    title = '컨설턴트 소개';
    subtitle = '이미 성공한 사업가에게 컨설팅을 받으세요.';
    lineText = '컨설턴트 소개';
    backgroundId = 'background4';
  } else if (currentPath.startsWith('/consulting')) {
    title = '컨설팅 안내';
    subtitle = '매출이 오르지 않으면 100% 환불해드립니다.';
    lineText = '컨설팅 안내';
    backgroundId = 'background5';
  } 

  return(
    <>
      <div id={backgroundId}>
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
