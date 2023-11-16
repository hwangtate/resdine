import './style/request.css'
import Topnav from './topnav';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

function Request(){

  useEffect(() => {
    AOS.init({
      duration: 1000,  // 애니메이션 지속 시간
      // 필요한 경우 여기에 더 많은 설정을 추가할 수 있습니다.
    });
  }, []);

  return(
    <main>
      <Topnav/>
      <div id='request-box'>

      <a href='tel:+01074963504'>
        <div className='request-cotain' id='request-call'>
          <img src='/img/call-icon.png' className='request-logo' alt="로고" />
          <div className='request-contain2'>
            <h2 className='request-title'>전화상담</h2>
            <p className='request-text'>
            <img src='/img/check-gre.png' className='request-check' alt="로고" />
             전화 상담 시간 : 09:00 ~ 22:00 
            </p>
            <p className='request-text'>
            <img src='/img/check-gre.png' className='request-check' alt="로고" />
              통화 및 문자 메시지를 통한 상담이 지원됩니다.
            </p>
            <p className='request-text'>
            <img src='/img/check-gre.png' className='request-check' alt="로고" />
              레스다인 컨설팅 황태영 대표 : 010-7496-3504
            </p>
          </div>
        </div>
        </a>

        <a href='https://pf.kakao.com/_xcTBbG' target="_blank" rel="noopener noreferrer">
        <div className='request-cotain' id='request-kakao'>
          <img src='/img/kakao-icon.png' className='request-logo' alt="로고" />
          <div className='request-contain2'>
          <h2 className='request-title1'>카톡상담</h2>
            <p className='request-text'>
              <img src='/img/check-yell.png' className='request-check' alt="로고" />
                24시간 전문 상담 서비스를 이용하실 수 있습니다.
            </p>
            <p className='request-text'>
              <img src='/img/check-yell.png' className='request-check' alt="로고" />
                카카오톡 메시지를 통한 상담이 지원됩니다.
            </p>
            <p className='request-text'>
              <img src='/img/check-yell.png' className='request-check' alt="로고" />
                카카오톡 채널 검색 : 레스다인
            </p>
          </div>
        </div>
        </a>

        <a href='mailto:resdineconsulting@gmail.com'>
        <div className='request-cotain' id='request-email'>
          <img src='/img/email-icon.png' className='request-logo' alt="로고" />
          <div className='request-contain2'>
          <h2 className='request-title2'>메일상담</h2>
            <p className='request-text'>
              <img src='/img/check-blu.png' className='request-check' alt="로고" />
                24시간 전문 상담 서비스를 이용하실 수 있습니다.
            </p>
            <p className='request-text'>
              <img src='/img/check-blu.png' className='request-check' alt="로고" />
                이메일을 통한 상담이 지원됩니다.
            </p>
            <p className='request-text'>
              <img src='/img/check-blu.png' className='request-check' alt="로고" />
                이메일 : resdineconsulting@gmail.com
            </p>
          </div>
        </div>
        </a>

      </div>
    </main>
  );
}

export default Request;