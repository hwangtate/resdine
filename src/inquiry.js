import React, { useState } from 'react';
import './style/inquiry.css';
import Topnav from './topnav';
import { Link } from 'react-router-dom';

// FAQ 데이터
const faqs = [
  {
    question: 'Q 레스다인 컨설팅과 전략 컨설팅의 차이점이 무엇인가요?',
    answer: <>
    전략 컨설팅은 레스다인 컨설팅의 3회 패키지로 생각하시면 됩니다.<br/><br/>
    대부분의 가게들은 레스다인 컨설팅만으로도 모든 문제를 해결할 수 있습니다.<br/><br/>
    하지만 몇몇 가게들에는 레스다인 컨설팅 한 번만으로는 부족한 경우가 있으니
    충분한 상담을 통해 결정하시면 좋을 것 같습니다.
    </>
  },
  {
    question: 'Q 레스다인 컨설팅을 받은 이후 전략 컨설팅으로 전환 할 수 있나요?',
    answer: 
    <>
    네, 가능합니다. 단, 레스다인 컨설팅을 받은 기간으로부터 3개월 이내에 신청하셔야 합니다.<br/><br/>
    전략 컨설팅 가격에서 레스다인 컨설팅 가격을 차감한 나머지 금액을 지불하시면 이후 전략 컨설팅을 받으실 수 있습니다.
    </>
  },
  {
    question: 'Q 환불 정책은 어떻게 되나요?',
    answer: 
    <>
    <Link to={'/refund'} className='answer-link'>여기를</Link> 통해 환불정책에 대해 알아보실 수 있습니다.
    </>
  },
  {
    question: 'Q 비대면 상담과 대면 상담은 무료인가요? ',
    answer: '네, 비대면 상담과 대면 상담은 전부 무료입니다. 편하게 상담 신청해주세요.'
  },
  {
    question: 'Q 문의는 어떻게 하나요? ',
    answer:
    <>
    <Link to={'/request'} className='answer-link'>여기를</Link> 통해 문의해주시면 친절하게 답변 드리겠습니다.
    </>
  },
  // 여기에 더 많은 FAQ를 추가할 수 있습니다.
];

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        {faq.question}
      </div>
      {isOpen && <div className="faq-answer">{faq.answer}</div>}
    </div>
  );
}

function Inquiry() {
  return (
    <main>
      <Topnav/>
      <div className="faq-container">
        <h2 className="faq-header">자주 묻는 질문</h2>
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </main>
  );
}

export default Inquiry;
