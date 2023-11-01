import './style/consulting.css'
import Topnav from './topnav';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';

function Consulting(){
  useEffect(() => {
    AOS.init({
      duration: 1000,  // 애니메이션 지속 시간
      // 필요한 경우 여기에 더 많은 설정을 추가할 수 있습니다.
    });
  }, []);

  return (
    <main>
      <Topnav/>
      <div id='consulting-div'>
        <div className='consulting-box' data-aos="fade-up">
          <h3 className='consulting-title' data-aos="fade-up">Resdine</h3>
          <p className='consulting-title-text' data-aos="fade-up">[레스다인 컨설팅]<br/>1년 이상 운영된 가게에 적합합니다.</p>
          <h3 className='consulting-price' data-aos="fade-up">1,850,000<span className='consulting-strong'>원</span></h3>

          <p className='consulting-text' data-aos="fade-up">
            <p className='consulting-step'>STEP 01</p>
            <img src='/img/head.png' alt='Head Icon' className='consulting-icon' /><br/>
            "상담신청"을 클릭한 후<br/>안내에 따라 상담을 신청합니다.
          </p>

          <br/><br/><br/>
          <p className='consulting-text' data-aos="fade-up">
          <img src='/img/arrow.png' alt='Arrow Icon' className='consulting-icon-1'/>
          </p>
          <br/><br/><br/>

          <p className='consulting-text' data-aos="fade-up">
            <p className='consulting-step'>STEP 02</p>
            <img src='/img/chat.png' alt='Head Icon' className='consulting-icon' /><br/>
            매니저와 1차 비대면 상담을 진행합니다.
          </p>
          
          <br/><br/><br/>
          <p className='consulting-text' data-aos="fade-up">
          <img src='/img/arrow.png' alt='Arrow Icon' className='consulting-icon-1'/>
          </p>
          <br/><br/><br/>

          <p className='consulting-text' data-aos="fade-up">
            <p className='consulting-step'>STEP 03</p>
            <img src='/img/person.png' alt='Head Icon' className='consulting-icon' /><br/>
            매니저와 2차 대면 상담을 진행합니다.
          </p>
          
          <br/><br/><br/>
          <p className='consulting-text' data-aos="fade-up">
          <img src='/img/arrow.png' alt='Arrow Icon' className='consulting-icon-1'/>
          </p>
          <br/><br/><br/>

          <p className='consulting-text' data-aos="fade-up">
            <p className='consulting-step'>STEP 04</p>
            <img src='/img/date.png' alt='Head Icon' className='consulting-icon' /><br/>
            결제를 완료하고 컨설턴트와 일정을 조율합니다.
          </p>
          
          <br/><br/><br/>
          <p className='consulting-text' data-aos="fade-up">
          <img src='/img/arrow.png' alt='Arrow Icon' className='consulting-icon-1'/>
          </p>
          <br/><br/><br/>

          <p className='consulting-text' id='last-size' data-aos="fade-up">
            <p className='consulting-step'>STEP 05</p>
            <img src='/img/contact.png' alt='Head Icon' className='consulting-icon' /><br/>
            약속된 일정에 컨설턴트가 컨설팅을 진행합니다.
          </p>
          <br/><br/>
          
          <Link to={'/'}><button className='consulting-butt' data-aos="fade-up">상담신청</button></Link>
        </div>

        <div className='consulting-box1' data-aos="fade-up">
          <h3 className='consulting-title' data-aos="fade-up">Strategy</h3>
          <p className='consulting-title-text' data-aos="fade-up">[전략 컨설팅]<br/>개선점이 많이 필요한 가게에 적합합니다.</p>
          <h3 className='consulting-price' data-aos="fade-up">4,550,000<span className='consulting-strong'>원</span></h3>

          <p className='consulting-text' data-aos="fade-up">
            <p className='consulting-step'>STEP 01</p>
            <img src='/img/favicon.ico' alt='Head Icon' className='consulting-icon' /><br/>
            레스다인 컨설팅과 동일하게 진행합니다.
          </p>

          <br/><br/><br/>
          <p className='consulting-text' data-aos="fade-up">
          <img src='/img/arrow.png' alt='Arrow Icon' className='consulting-icon-1'/>
          </p>
          <br/><br/><br/>

          <p className='consulting-text' data-aos="fade-up">
            <p className='consulting-step'>STEP 02</p>
            <img src='/img/person.png' alt='Head Icon' className='consulting-icon' /><br/>
            3개월 후 매니저와 비대면 상담을 진행합니다.
          </p>

          <br/><br/><br/>
          <p className='consulting-text' data-aos="fade-up">
          <img src='/img/arrow.png' alt='Arrow Icon' className='consulting-icon-1'/>
          </p>
          <br/><br/><br/>

          <p className='consulting-text' data-aos="fade-up">
            <p className='consulting-step'>STEP 03</p>
            <img src='/img/date.png' alt='Head Icon' className='consulting-icon' /><br/>
            컨설턴트와 일정을 다시 조율합니다.
          </p>

          <br/><br/><br/>
          <p className='consulting-text' data-aos="fade-up">
          <img src='/img/arrow.png' alt='Arrow Icon' className='consulting-icon-1'/>
          </p>
          <br/><br/><br/>

          <p className='consulting-text' data-aos="fade-up">
            <p className='consulting-step'>STEP 04</p>
            <img src='/img/contact.png' alt='Head Icon' className='consulting-icon' /><br/>
            약속된 일정에 컨설턴트가 컨설팅을 진행합니다.
          </p>

          <br/><br/><br/>
          <p className='consulting-text' data-aos="fade-up">
          <img src='/img/arrow.png' alt='Arrow Icon' className='consulting-icon-1'/>
          </p>
          <br/><br/><br/>

          <p className='consulting-text' data-aos="fade-up">
            <p className='consulting-step'>STEP 05</p>
            <img src='/img/head.png' alt='Head Icon' className='consulting-icon' /><br/>
            3개월 후 매니저와 비대면 상담을 진행합니다.
          </p>

          <br/><br/><br/>
          <p className='consulting-text' data-aos="fade-up">
          <img src='/img/arrow.png' alt='Arrow Icon' className='consulting-icon-1'/>
          </p>
          <br/><br/><br/>

          <p className='consulting-text' data-aos="fade-up">
            <p className='consulting-step'>STEP 06</p>
            <img src='/img/date.png' alt='Head Icon' className='consulting-icon' /><br/>
            컨설턴트와 일정을 다시 조율합니다.
          </p>

          <br/><br/><br/>
          <p className='consulting-text' data-aos="fade-up">
          <img src='/img/arrow.png' alt='Arrow Icon' className='consulting-icon-1'/>
          </p>
          <br/><br/><br/>

          <p className='consulting-text' id='last-size' data-aos="fade-up">
            <p className='consulting-step'>STEP 07</p>
            <img src='/img/contact.png' alt='Head Icon' className='consulting-icon' /><br/>
            약속된 일정에 컨설턴트가 컨설팅을 진행합니다.
          </p>
          <br/><br/>

          <Link to={'/'}><button className='consulting-butt' data-aos="fade-up">상담신청</button></Link>
        </div>
      </div>
    </main>
  );
}

export default Consulting;