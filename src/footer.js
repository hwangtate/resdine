import './style/footer.css'

function Footer (){
  return (
    <footer>
      <p><img src="img/logo1.png" id="footerlogo" alt="푸터 로고" /></p>
      <p id="footertext">
        업체명 : 레스다인 주소 : 세종특별자치시 달빛1로 206<br />
        TEL. 01046883504 사업자등록번호 : 000000000 <br /> 개인정보책임자 : 황태영 <br /><br />
        Copyright 2023. RESDINE all rights reserved.
      </p>
      <p id="footertext">
        <a href="#" className="fa">레스다인 소개</a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="#" className="fa">컨설팅 신청</a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="#" className="fa">문의하기</a>&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="#" className="fa">개인정보보호정책</a>
      </p>
    </footer>
  );
}

export default Footer;