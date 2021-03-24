import React from "react";

import "../component/Introduction.css";

function Introduction(props) {
  return (
    <div className="wrapper">
      <div className="title">
        <img src={require("../../images/title_01.jpg").default} alt />
        <p className="title_main bold">회사소개</p>
      </div>
      <div className="content1">
        <span className="bold purple content1_p1">역사와 전통,</span>
        <span className="bold purple content1_p2">
          IT교육을 선도하는 실무중심 교육기관
        </span>
      </div>
      <div className="content2">
        <div className="img-robot">
          <img src={require("../../images/company0.png").default} alt />
        </div>
        <div className="content2_bottom">
          <div className="logo-content">
            <img src="./img-cong/logo.png" alt />
            <span>회사소개 및 설립 목적</span>
          </div>
          <div className="text_content2">
            <div className="line line1">
              본 교육기관은 1983년 벤처기업 1호로 창업해 디지털 시대를 선도하는
            </div>
            <div className="line line2">
              (주) 비트컴퓨터가 [기술은 나눌수록 커진다] [우수한 인재를 양성해
              사회에 환원하겠다] 는 목적으로 설립하였습니다.
            </div>
            <div className="line line3">
              따라서 기관장은 국내 최고의 IT전문가로 정부 정책의 방향을 이해하고
              공감하며
            </div>
            <div className="line line4">
              산업체가 필요로 하는 인재를 양성하기 위해 양질의 훈련과정을
              운영하고 있습니다.
            </div>
            <div className="line line5">
              더불어 ‘한국 소프트웨어 산업 협회’ 회장 활동 등 국내 SW산업의
              건전한 발전과 진흥을 목적으로
            </div>
            <div className="line line6 bold">
              SW산업에 대한 인식제고와 SW산업정책, 제도분야의 개선을 위해
              다각적인 활동을 하고 있습니다.
            </div>
          </div>
        </div>
      </div>
      <div className="content3">
        <div className="container">
          <div className="content3-top bold">주요 사업 및 실적</div>
          <div className="content3-bottom">1990 ~ 현재</div>
        </div>
      </div>
      <div className="container">
        <div className="content4">
          <div className="left-content4">
            <img src={require("../../images/company2.jpg").default} alt />
          </div>
          <div className="right-content4">
            <ul>
              <li>1990년부터 전통과 역사가 있는 비트 수료생 배출</li>
              <li>
                과학기술정보통신부 [혁신성장청년인재집중양성사업] 3년 수행기관
              </li>
              <li>
                과학기술정보통신부 SW전문인력양성기관 (자바, 임베디드, 빅데이터,
                AI, 자율주행 등)
              </li>
              <li>2018~현재 서울시 뉴딜일자리 정책사업 수행</li>
              <li>고용노동부 국가기간 전략산업직종 훈련 운영중</li>
              <li>국내 및 해외 취업지원</li>
              <li>2019년 고용노동부 인증평가 우수훈련기관 선정</li>
              <li>고용노동부 3년 인증기관</li>
              <li>고용노동부 이수자평가 A등급 기관</li>
              <li>지식경제부 SW 핵심역량강화 우수과정 선정</li>
              <li>실업대책추진 공로표창상 수상(국무총리상)</li>
              <li>그룹스터디 및 프로젝트 중심의 실무 교육과정 진행</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content5">
        <div className="container">
          <div className="content5-text bold">IT 전문인력 양성</div>
        </div>
      </div>
      <div className="container">
        <div className="content6">
          <div className="content6_1">
            <div className="content6_img">
              <img src={require("../../images/company3.png").default} alt />
            </div>
            <div className="content6_p1 coral bold">01</div>
            <div className="content6_p2 coral bold">맞춤형 전문인력 양성</div>
            <div className="content6_p3">
              <div className="content6_p3_top">산업 현장의 인력 해소 및</div>
              <div className="content6_p3_bot">기업 경쟁력 강화</div>
            </div>
          </div>
          <div className="content6_2">
            <div className="content6_img">
              <img src={require("../../images/company4.png").default} alt />
            </div>
            <div className="content6_p1 coral bold">02</div>
            <div className="content6_p2 coral bold">융합형 전문인력 양성</div>
            <div className="content6_p3">
              <div className="content6_p3_top">인공지능 분야의 타 산업</div>
              <div className="content6_p3_bot">
                융합을 통한 산업 경쟁력 강화
              </div>
            </div>
          </div>
          <div className="content6_3">
            <div className="content6_img">
              <img src={require("../../images/company5.png").default} alt />
            </div>
            <div className="content6_p1 coral bold">03</div>
            <div className="content6_p2 coral bold">리더급 전문인력 양성</div>
            <div className="content6_p3">
              <div className="content6_p3_top">인공지능 분야 해외시장</div>
              <div className="content6_p3_bot">
                진출 등을 통한 국가 경쟁력 강화
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content7">
        <div className="container">
          <div className="content7-text bold">비트캠프의 슬로건</div>
        </div>
      </div>
      <div className="container">
        <div className="content8">
          <div className="content8_left">
            <div className="content_left_p1">
              <img src={require("../../images/company_mark.jpg").default} alt />
            </div>
            <div className="content_left_p2">
              <span className="bold">기술은 나눌수록</span> 커진다.
            </div>
            <div className="content_left_p3">
              <span className="bold">우수한 인재를</span> 양성하여
              <span className="bold">사회에</span> 환원한다.
            </div>
            <div className="content_left_p4">
              <img src={require("../../images/company_font.jpg").default} alt />
            </div>
            <div className="content_left_p5">
              Technology grows as it is divided.
            </div>
            <div className="content_left_p6">
              cultivate talented people and give them back to society.
            </div>
            <div className="content_left_p7">
              Bit Camp Preparing for the Top
            </div>
          </div>
          <div className="content8_right">
            <img src={require("../../images/company6.png").default} alt />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
