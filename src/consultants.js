import './style/consultants.css'
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Topnav from './topnav';
import Example from './consultimg/example.jpg'
import Example1 from './consultimg/example1.jpg'

const consultantsData = {
  
  "ka": {
    profile: Example,
    name: "카리나",
    job: "요식업 및 외식업",
    introduce: `안녕하세요 카리나 입니다.
    `
  },
  "jang": {
    profile: Example1,
    name: "장원영",
    job: "카페",
    introduce:'안녕하세요 장원영 입니다.'
  },
  "leeayoung": {
    profile: Example,
    name: "아이브",
    job: "고깃집",
    introduce: "안녕하세요 아이브 입니다."
  }

};

function Consultants() {

  const { consultantName } = useParams();
  const consultant = consultantsData[consultantName];

  const handleLinkClick = () => {
    localStorage.setItem('preventScroll', 'true');
  };

  const getLinkClassName = (targetConsultantName) => {
    // 기본 클래스
    let className = 'consult-nav-consult';

    // 만약 현재 컨설턴트가 대상 컨설턴트와 일치하면, 'selected-consultant' 클래스를 추가합니다.
    if (consultantName === targetConsultantName) {
      className += ' selected-consultant'; // 클래스 이름 사이에 공백이 있는 것에 주의하세요.
    }

    return className;
  };

  return(
    <main>
      <Topnav/>

      <div id='consult-nav'>
        <Link to={'/consultants/ka'} className={getLinkClassName('ka')} onClick={handleLinkClick}>카리나 컨설턴트</Link>
        <Link to={'/consultants/jang'} className={getLinkClassName('jang')} onClick={handleLinkClick}>장원영 컨설턴트</Link>
      </div>

      <div id='consult-contain'>
        <div className='consult-contain2'>
          <img src={consultant.profile} alt='컨설턴트 이미지' className="profile" />
          <h2 className='consult-name'>
            {consultant.name} <p className='consult-1intro'>컨설턴트 - {consultant.job} 전문 컨설턴트</p>
            <hr/>
            <h3 className='consult-introduce'>
              {consultant.introduce}
            </h3>
          </h2>
        </div>
      </div>
    </main>
  );
}

export default Consultants;