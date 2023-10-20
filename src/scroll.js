import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Scroll() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 상단으로 스크롤
  }, [location.pathname]);

  return null; // 렌더링하지 않는 빈 컴포넌트
}

export default Scroll;
