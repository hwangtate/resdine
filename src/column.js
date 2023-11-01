import './style/column.css'
import Topnav from './topnav';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

function Column(){

  useEffect(() => {
    AOS.init({
      duration: 1000,  // 애니메이션 지속 시간
      // 필요한 경우 여기에 더 많은 설정을 추가할 수 있습니다.
    });
  }, []);

  return(
    <main>
      <Topnav/>
      <h3 id='column-text'>
        현재 컨설턴트들이 모여 칼럼을 작성중입니다.
      </h3>
    </main>
  );
}

export default Column;