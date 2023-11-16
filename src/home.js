import './style/home.css'
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,  // 애니메이션 지속 시간
      // 필요한 경우 여기에 더 많은 설정을 추가할 수 있습니다.
    });
  }, []);

  return (
    <main id="main1">
      <p className="p">
        업계 최고의 컨설턴트
      </p>
      <h1 id="title1">
        매출이 증가하지<br />
        않는다면 100% 환불해드립니다.
      </h1>
      <h1 id="mobile-title1">
        매출이 증가하지<br />
        않는다면 100%<br />
        환불해드립니다.
      </h1>
      <p className="p" id="p">
        먼저 성공한 사람들의 성공 가이드
      </p>
      <div className="contain1">
        <Link to={'/column'} className="contain2">
          <img src="/img/Brief.png" className="icon" alt="아이콘 1" />
          <p className="text">컨설팅 없이 매출 올리기</p>
          <p className="subtext">컨설팅을 받지 않아도 됩니다.<br />처음 오신 분이라면 꼭 읽어주세요.</p>
        </Link>
        <Link to={'/consultants/ka'} className="contain2">
          <img src="/img/Document.png" className="icon" alt="아이콘 2" />
          <p className="text">컨설턴트 커리어 & 소개 </p>
          <p className="subtext">먼저 성공한 사업가에게<br />컨설팅을 받으세요.</p>
        </Link>
        <Link to={'/about'} className="contain2">
          <img src="/img/Analyze.png" className="icon" alt="아이콘 3" />
          <p className="text">레스다인 컨설팅</p>
          <p className="subtext">왜 우리 레스다인 컨설팅을<br />선택해야 하는지 알 수 있습니다.</p>
        </Link>
      </div>
    </main>

  );
}

export default Home;