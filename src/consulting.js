import './style/consulting.css'
import Topnav from './topnav';

function Consulting(){
  return (
    <main>
      <Topnav/>
      <div id='consulting-div'>
        <div className='consulting-box'>
          
          <h3 className='consulting-title'>전략 컨설팅</h3>
          <p className='consulting-title-text'>1년 이상 운영된 가게에 적합합니다.</p>
          <h3 className='consulting-price'>₩ 1,850,000</h3>
          
          <p className='consulting-text'>맞춤형 컨설팅</p>
          <p className='consulting-text'>대면형 컨설팅</p>
          <p className='consulting-text'>대면형 컨설팅</p>
          
          <button className='consulting-butt'>상담신청</button>
        </div>

        <div className='consulting-box'>
    
            <h3 className='consulting-title'>완벽 컨설팅</h3>
            <p className='consulting-title-text'>1년 이상 운영된 가게 또는<br/>개선점이 많이 필요한 가게에 적합합니다.</p>
            <h3 className='consulting-price'>₩ 4,550,000</h3>

          <p className='consulting-text'>맞춤형 컨설팅</p>
          <p className='consulting-text'>대면형 컨설팅</p>
          <p className='consulting-text'>완벽형 컨설팅</p>

          <button className='consulting-butt'>상담신청</button>
        </div>
      </div>
    </main>
  );
}

export default Consulting;