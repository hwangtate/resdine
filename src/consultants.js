import './style/consultants.css'
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Topnav from './topnav';
import Example from './consultimg/example.jpg'

const consultantsData = {
  
  "leejaehoon": {
    profile: Example,
    name: "이재훈",
    job: "요식업 및 외식업",
    introduce: `안녕하세요 이재훈 입니다.안녕하세요 이재훈 입니다.안녕하세요 이재훈 입니다.안녕하세요 이재훈 입니다.

    안녕하세요 이재훈 입니다.안녕하세요 이재훈 입니다.안녕하세요 이재훈 입니다.안녕하세요 이재훈 입니다.

    안녕하세요 이재훈 입니다.안녕하세요 이재훈 입니다.안녕하세요 이재훈 입니다.안녕하세요 이재훈 입니다.

    안녕하세요 이재훈 입니다.안녕하세요 이재훈 입니다.안녕하세요 이재훈 입니다.안녕하세요 이재훈 입니다.
    `
  },
  "hwang": {
    profile: Example,
    name: "황태영",
    job: "카페",
    introduce: "안녕하세요 황태영 입니다. 안녕하세요 황태영 입니다. 안녕하세요 황태영 입니다."
  },
  "leeayoung": {
    profile: Example,
    name: "이아영",
    job: "고깃집",
    introduce: "안녕하세요 이아영 입니다. 안녕하세요 이아영 입니다. 안녕하세요 이아영 입니다."
  }

};

function Consultants() {

  // 현재 URL의 파라미터에서 consultantName을 추출합니다.
  const { consultantName } = useParams();

  // URL 파라미터에 따라 해당 컨설턴트 정보를 가져옵니다.
  const consultant = consultantsData[consultantName];

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
        <Link to={'/consultants/leejaehoon'} className={getLinkClassName('leejaehoon')}>이재훈 컨설턴트</Link>
        <Link to={'/consultants/hwang'} className={getLinkClassName('hwang')}>장원영 컨설턴트</Link>
        <Link to={'/consultants/leeayoung'} className={getLinkClassName('leeayoung')}>아이브 컨설턴트</Link>
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