import './style/about.css'
import Topnav from './topnav';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

function About() {

  useEffect(() => {
    AOS.init({
      duration: 1000,  // 애니메이션 지속 시간
      // 필요한 경우 여기에 더 많은 설정을 추가할 수 있습니다.
    });
  }, []);

  return (
    <main>
      < Topnav/>
      <div>
        <p id="text3">
          <div>
            <h1 className='strongtext'>레스다인 컨설팅</h1>
            <p>안녕하세요, 저는 레스다인 컨설팅 회사 대표 황태영입니다.</p>
            <br/><br/><br/>
            장사를 시작하고 나면 정말 많은 문제들을 맞닥드리게 됩니다.
            <br/><br/><br/>
            대표적인 문제 3가지를 꼽자면
            <br/><br/><br/>
            1. 낮은 매출과 높은 운영 비용
            <br/><br/>
            2. 고객 유치 및 유지 실패
            <br/><br/>
            3. 비효율적인 운영 및 관리
            <br/><br/><br/>
            이러한 문제들은 가게를 문 닫게 만드는 대표적인 문제들입니다.
            <br/><br/><br/>
            저는 이러한 3가지 문제를 겪는 많은 사장님들을 보았고,
            <br/>
            정말 조금만 바꾸고 노력하면 이 문제들을 해결할 수 있음에도 불구하고,
            <br/><br/><br/>
            문제를 해결하지 못하거나 문제를 인식하지 못해 가게를 접게 되는 많은 사장님들을 보았습니다.
            <br/><br/><br/>
            이에 저는 많은 사장님들의 장사를 돕고자 레스다인 컨설팅 회사를 창립하게 되었습니다.
            <br/><br/><br/>
            저희 레스다인은 컨설팅이 꼭 필요한 가게만을 컨설팅 하고 있습니다.
            <br/><br/><br/>
            저희 레스다인의 칼럼만 읽고도 고객님의 가게가 더 나아질 수 있으니 하단의 링크를 통해 읽어보시길 바랍니다.
            <br/><br/><br/>
            <Link to={'/column'} className='abouttext'>[컨설팅 없이 매출 올리기]</Link>
          </div>
          <div data-aos="fade-up">
            <h1 className='strongtext'>왜 레스다인 컨설팅인가?</h1>
            저희 레스다인 컨설팅의 컨설턴트들은 이미 장사로 성공한 사람들입니다.
            <br/><br/><br/>
            그렇기에 고객님께서 겪고 계신 모든 문제들은 저희 컨설턴트들이 이미 경험하고 극복한 문제들입니다.
            <br/><br/><br/>
            저희 회사의 컨설턴트들은 고객님이 사업에서 마주하고 있는,<br/>
            고객님도 인지하지 못했던 문제점들을 파악하고 해결책을 제시할 수 있다는 점에 확신을 가지고 있습니다.
            <br/><br/><br/>
            또한 컨설팅 이후 6개월 내에 가게의 매출이 증가하지 않는다면 100% 환불을 받으실 수 있습니다.
            <br/><br/><br/>
            대부분의 컨설팅 업체들은 환불 보장 제도를 사용하고 있지 않습니다.
            <br/><br/><br/>
            다른 업체들이 환불 보장 제도를 사용하고 있지 않는 이유는 다양하게 있을 수 있지만,
            <br/>
            저희 생각에는 확실하게 매출을 증가시킬 수 없기 때문이라고 생각합니다.
            <br/><br/><br/>
            저희는 환불 보장 제도를 걸고 있는 것 만큼 확신이 있고 자신이 있습니다.
            <br/><br/><br/>
            하단의 링크를 통해 저희 회사의 최고의 컨설턴트들을 확인해보세요.
            <br/><br/><br/>
            <Link to={'/consultants/ka'} className='abouttext'>[컨설턴트 커리어 및 소개]</Link>
          </div>

          <div data-aos="fade-up">
            <h1 className='strongtext'>우리의 서비스</h1>
            레스다인 컨설팅에서는 고객님의 사업에 꼭 맞는 맞춤형 컨설팅 서비스를 제공해 드립니다.
            <br/><br/><br/>
            그 중 주요 서비스로는 다음과 같이 두 가지를 중점으로 진행하고 있습니다.
            <br/><br/><br/>
            <Link to={'/consulting'} className='abouttext'>[레스다인 컨설팅]</Link>
            <br/><br/>
            레스다인의 컨설턴트가 고객님의 가게로 찾아가 문제점을 파악하고 해결합니다.
            <br/><br/><br/>
            1년 이상 운영된 가게에 적합합니다.
            <br/><br/><br/>
            <Link to={'/consulting'} className='abouttext'>[전략 컨설팅]</Link>
            <br/><br/>
            레스다인의 컨설턴트가 고객님의 가게로 찾아가 문제점을 파악하고 해결합니다.
            <br/><br/><br/>
            확실한 성과가 나올때까지 맞춤형 컨설팅 서비스를 제공합니다.
            <br/><br/><br/>
            운영한 지 얼마 되지 않은 가게나 개선점이 많은 가게에 적합합니다.
          </div>
        </p>
      </div>
    </main>
  );
}

export default About;