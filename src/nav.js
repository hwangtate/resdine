import './style/nav.css';
import {Link} from 'react-router-dom';

function Nav() {

  return (
      <header>
        <nav>
          <ul>
            <Link to={'/'} style={{ padding: 0 }}>
              <img src="img/logo.png" id="logo" alt="로고" />
            </Link>
            <li>
              <Link to={'/about'}>레스다인 소개</Link>
              <ul>
                <li><Link to={'/about'} >레스다인 소개</Link></li>
                <li><Link to={'/'}>컨설턴트 소개</Link></li>
              </ul>
            </li>
            <li>
              <Link to={'/'}>상담신청</Link>
              <ul>
                <li><Link to={'/'}>전략 컨설팅</Link></li>
                <li><Link to={'/'}>창업 컨설팅</Link></li>
              </ul>
            </li>
            <li>
              <Link to={'/'}>컨설팅 후기</Link>
              <ul>
                <li><Link to={'/'}>컨설팅 후기</Link></li>
                <li><Link to={'/'}>컨설턴트의 조언</Link></li>
              </ul>
            </li>
            <li>
              <Link to={'/'}>요금</Link>
              <ul>
                <li><Link to={'/'}>전략 컨설팅</Link></li>
                <li><Link to={'/'}>창업 컨설팅</Link></li>
              </ul>
            </li>
            <li>
              <Link to={'/'}>문의</Link>
              <ul>
                <li><Link to={'/'}>FAQ</Link></li>
                <li><Link to={'/'}>문의하기</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default Nav;
