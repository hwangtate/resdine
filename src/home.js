import './style/home.css'
import {Link} from 'react-router-dom';

function Home() {
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
        <Link to={'/about'} className="contain2">
          <img src="/img/Brief.png" className="icon" alt="아이콘 1" />
          <p className="text">컨설팅 없이 매출 올리기</p>
          <p className="subtext">당신에게 컨설팅이<br />필요하지 않을 수도 있습니다.</p>
        </Link>
        <Link to={'/consultants/ka'} className="contain2">
          <img src="/img/Document.png" className="icon" alt="아이콘 2" />
          <p className="text">컨설턴트 커리어 & 소개 </p>
          <p className="subtext">이미 성공한 사업가에게<br />컨설팅을 받으세요.</p>
        </Link>
        <Link to={'/'} className="contain2">
          <img src="/img/Analyze.png" className="icon" alt="아이콘 3" />
          <p className="text">전략 컨설팅 안내</p>
          <p className="subtext">성공한 사업가의<br />노하우와 비밀을 받아가세요.</p>
        </Link>
      </div>
    </main>

  );
}

export default Home;