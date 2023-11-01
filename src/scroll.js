import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Scroll() {
  const location = useLocation();

  useEffect(() => {
    // localStorage에서 값을 가져와 확인합니다.
    const preventScroll = localStorage.getItem('preventScroll');

    // preventScroll 값이 true가 아니면 스크롤 합니다.
    if (preventScroll !== 'true') {
      window.scrollTo(0, 0);
    }

    // 사용 후 localStorage의 preventScroll 값을 지웁니다.
    localStorage.removeItem('preventScroll');
  }, [location.pathname]);

  return null; // 렌더링하지 않는 빈 컴포넌트
}

export default Scroll;
