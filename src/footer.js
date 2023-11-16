import React from 'react';
import { Link } from 'react-router-dom';
import './style/footer.css';

function Footer() {
  return (
    <footer>
      <p><img src='/img/logo1.png' id="footerlogo" alt="푸터 로고" /></p>
      <p id="footertext">
        업체명 : 레스다인 컨설팅 개인정보책임자 : 황태영<br />
        TEL. +821074963504 Email : resdineconsulting@gmail.com<br /><br />
        Copyright 2023. RESDINE all rights reserved.
      </p>
      <p id="footertext">
        <Link to="/about" className="fa">레스다인</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/inquiry" className="fa">문의하기</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/refund" className="fa">환불정책</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/privacy" className="fa">개인정보보호정책</Link>
      </p>
    </footer>
  );
}

export default Footer;
