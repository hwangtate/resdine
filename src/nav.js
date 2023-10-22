import './style/nav.css';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
      <header>
        <nav id='nav'>
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

        {/* 모바일 용 내비게이션 바 */}
        
        <div className="App">
          <div className="menu-box-container">
            <Link to={'/'} style={{ padding: 0 }}>
              <img src="img/logo.png" id="box-logo" alt="로고" />
            </Link>
            <Menu isOpen={menuOpen} onStateChange={({ isOpen }) => setMenuOpen(isOpen)}>
              <div className="menu-container">
                <Link to={'/'} style={{ padding: 0 }}  onClick={closeMenu}>
                  <img src="img/logo.png" id="menu-logo" alt="로고" />
                </Link>
                <Link to={'/about'} className="menu-item" onClick={closeMenu}>
                  - 레스다인 소개
                  <hr></hr>
                </Link>
                <Link to={'/'} className="menu-item" onClick={closeMenu}>
                  - 컨설턴트 소개
                  <hr></hr>
                </Link>
                <Link to={'/'} className="menu-item" onClick={closeMenu}>
                  - 컨설팅 후기
                  <hr></hr>
                </Link>
                <Link to={'/'} className="menu-item" onClick={closeMenu}>
                  - 컨설턴트의 조언
                  <hr></hr>
                </Link>
                <Link to={'/'} className="menu-item" onClick={closeMenu}>
                  - 전략 컨설팅 
                  <hr></hr>
                </Link>
                <Link to={'/'} className="menu-item" onClick={closeMenu}>
                  - 창업 컨설팅
                  <hr></hr>
                </Link>
                <Link to={'/'} className="menu-item" onClick={closeMenu}>
                  - 상담
                  <hr></hr>
                </Link>
                <Link to={'/'} className="menu-item" onClick={closeMenu}>
                  - 요금
                  <hr></hr>
                </Link>
                <Link to={'/'} className="menu-item" onClick={closeMenu}>
                  - 문의
                  <hr></hr>
                </Link>
              </div>
            </Menu>
          </div>
        </div>
      </header>
  );
}

export default Nav;
