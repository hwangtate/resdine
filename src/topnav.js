import React from 'react';
import { useLocation } from 'react-router-dom'; 
import './style/topnav.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Topnav() {

  useEffect(() => {
    AOS.init({
      duration: 1000,  // 애니메이션 지속 시간
      // 필요한 경우 여기에 더 많은 설정을 추가할 수 있습니다.
    });
  }, []);
  
  const location = useLocation();

  const currentPath = location.pathname;

  let title, subtitle, backgroundId;

  if (location.pathname === '/about') {
    title = 'We are Resdine';
    subtitle = '레스다인과 함께하는 성공으로의 단계';
    backgroundId = 'background3';
  } else if (currentPath.startsWith('/consultants')) {
    title = 'Consultants';
    subtitle = '먼저 성공한 사업가에게 컨설팅을 받으세요.';
    backgroundId = 'background4';
  } else if (currentPath.startsWith('/consulting')) {
    title = 'Consulting';
    subtitle = '매출이 오르지 않으면 100% 환불해드립니다.';
    backgroundId = 'background5';
  } else if (currentPath.startsWith('/column')) {
    title = 'Column';
    subtitle = (
      <>
        레스다인의 칼럼만으로도 매출 향상이 가능합니다.
      </>
      );
    backgroundId = 'background6';
  } 

  return(
    <>
      <div id={backgroundId}>
        <h1 id="title3" data-aos="fade-right">{title}</h1> 
        <h2 id="subtitle3" data-aos="fade-right">{subtitle}</h2> 
      </div>
    </>
  );
}

export default Topnav;
