import React, { useEffect, useState } from "react";
import usePage from "../../../redux/store/hooks/usePage";
import ProjectRefo from "./Project.refo";
import Menu from "../../Menu";
import "./Project.scss";

const index = {
  port: 0, // portfolio
  pg: 1, // pick and go
  rb: 2, // rankingball
  b2b: 3, // b2b site
  web: 4, // web standard - 3
  se: 5, // effect - 2
};

function Project() {
  const { currentPageProject } = usePage();

  const [indexNum, setIndexNum] = useState(index.port);

  const pageScrollValue = 763;

  const onHandleScroll = () => {
    if (10 < window.pageYOffset) {
      if (pageScrollValue < window.pageYOffset) {
        setIndexNum(index.port);
      }
      setIndexNum(index.port);
    }

    if (pageScrollValue < window.pageYOffset) {
      if (pageScrollValue * 2 < window.pageYOffset) {
        setIndexNum(index.pg);
      }
      setIndexNum(index.pg);
    }

    if (pageScrollValue * 2 < window.pageYOffset) {
      if (pageScrollValue * 3 < window.pageYOffset) {
        setIndexNum(index.rb);
      }
      setIndexNum(index.rb);
    }

    if (pageScrollValue * 3 < window.pageYOffset) {
      if (pageScrollValue * 4 < window.pageYOffset) {
        setIndexNum(index.b2b);
      }
      setIndexNum(index.b2b);
    }

    if (pageScrollValue * 4 < window.pageYOffset) {
      if (pageScrollValue * 5 < window.pageYOffset) {
        setIndexNum(index.web);
      }
      setIndexNum(index.web);
    }

    if (pageScrollValue * 5 < window.pageYOffset) {
      if (pageScrollValue * 6 < window.pageYOffset) {
        setIndexNum(index.se);
      }
      setIndexNum(index.se);
    }

    if (window.pageYOffset === 0) {
      setIndexNum(index.port);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onHandleScroll);

    return () => {
      window.removeEventListener("scroll", onHandleScroll); //clean up
    };
  }, [window.scrollY]);

  useEffect(() => {
    window.scrollTo(0, 0);
    currentPageProject();
  }, []);

  return (
    <div className="project">
      <Menu />

      {/* POLT */}
      <div className={`column-1 ${indexNum === index.port ? "active" : ""}`}>
        <p className="title">PROJECT01</p>
        <div className="contents">
          <ProjectRefo
            imageClass={"port"}
            desc={
              '해당 프로젝트는 사실 SASS나 CSS를 사용할때 다른파일에서 서로 다른 파일을 import했을때 클레스네임이 겹치는 경우 UI/UX구조가 충돌나는 경우를 대비하기 위해 홀로 공부하던 내용을 기반으로 작성하였습니다. 때문에 클래스네임을 모듈화 하였고 기존 사용방법인 "className"이 아닌 "styleName"으로 사용합니다. 자세한 사용방법은 참고URL의 github를 확인해주세요. '
            }
            cont_1={"20.11 ~ 21.01"}
            cont_2={"React, Javascript, SASS, Webpack, Git..."}
            cont_3={
              <p>
                1명
                <br />
                100%
              </p>
            }
            cont_4={
              <p>
                포트폴리오 제작 사이트로 기존 Style 문법을 커스텀 하여
                변경하였습니다.
              </p>
            }
            cont_5={
              "기획부터 디자인, 퍼블리싱, 개발등 처음부터 끝까지 혼자 해본 포트폴리오 제작으로 그동안 해온것들을 기록하였습니다."
            }
            cont_6={
              <div>
                <a
                  href="https://jangar6.github.io/pages"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PORTFOLIO SITE
                </a>
                <a
                  href="https://github.com/jangar6/port2022"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PORTFOLIO GITHUB
                </a>
              </div>
            }
          />
        </div>
        <p className="sub-title">PORTFOLIO SITE</p>
      </div>

      {/* pickandgo */}
      <div className={`column-2 ${indexNum === index.pg ? " active" : ""}`}>
        <p className="title">PROJECT02</p>
        <div className="contents">
          <ProjectRefo
            imageClass={"pickgo"}
            desc={
              "‘twitch’라는 플랫폼에서 진행되는 ‘League of Legends’게임 중계 방송에서 twitch extension을 사용하여 코드르 띄우는 방식입니다. 간단한 빙고게임과 실시간 게임정보를 업데이트하여 차트로 시각화하여 보여주어 시청하는 고객에게 재미를 더해주는 컨텐츠 입니다."
            }
            cont_1={"21.03 ~ 22.08 (계속 진행)"}
            cont_2={"React, GitLab, Javascript, SASS, Webpack ..."}
            cont_3={
              <p>
                1 ~ 3명 (시기에 따라 조정)
                <br /> 70%
              </p>
            }
            cont_4={
              <p>
                웹 개발 및 퍼블리싱 <br /> 리팩토링 후 퍼블 수정 <br /> 모바일
                코드 수정 <br /> 새로운 차트 기능 추가
              </p>
            }
            cont_5={
              "공통 모듈 사용으로 코드 간소화, 모바일 출시 기존에 없던 새로운 차트 개발"
            }
            cont_6={
              <a
                href="https://www.youtube.com/watch?v=s4VpFxbw8M0"
                target="_blank"
                rel="noopener noreferrer"
              >
                GIUDE YOUTUBE
              </a>
            }
          />
        </div>
        <p className="sub-title">PICK & GO</p>
      </div>

      {/* RankingBall */}
      <div className={`column-3 ${indexNum === index.rb ? " active" : ""}`}>
        <p className="title">PROJECT03</p>
        <div className="contents">
          <ProjectRefo
            imageClass={"rank"}
            desc={
              "아레나캐스트 회사에서는 다양한 e-sports게임과 관련한 컨텐츠들을 제작하였으며 해당 프로젝트는 그 컨텐츠들에 사용되는 카드로 카드의 파츠들을 구성하고 사용하는등의 목적을 위하여 거래 사이트를 제작한 것입니다."
            }
            cont_1={"22.05 ~ 22.05"}
            cont_2={"Next, React, GitLab, Javascript, SASS, Webpack ..."}
            cont_3={
              <p>
                2명
                <br />
                65%
              </p>
            }
            cont_4={
              <p>
                UI/UX를 작업하였으며 슬라이드, 메뉴, 페이지 전환 등의 기능이나
                반응형하였습니다.
              </p>
            }
            cont_5={
              "Next를 사용하여 작업하였으며 이 외에 클래스네임 모듈화, 컴포넌트 분류 방법등 다양한 기술을 사용해보며 제작한 사이트로 같이 참여한 개발자와 부족한 부분들을 공부하며 개발 지식을 쌓는데 도움이 되었습니다. 해당 사이트는 아직 미완성임에도 불구하고 접속률이 4.4%를 기록하였습니다."
            }
            cont_6={
              <a
                href="https://store.rankingball.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WEB STORE SITE
              </a>
            }
          />
        </div>
        <p className="sub-title">WEB STORE - RANKINGBALL</p>
      </div>

      {/* b2b */}
      <div className={`column-4 ${indexNum === index.b2b ? "active" : ""}`}>
        <p className="title">PROJECT04</p>
        <div className="contents">
          <ProjectRefo
            imageClass={"b2b"}
            desc={
              "유저 b2b 사이트를 제작하였습니다. 경기정보나 새로운 소식도 얻을 수 있으며 경험치를 얻어 그에 대한 보상까지 지급하는 사이트로 회사만의 거래사이트로 볼 수 있습니다."
            }
            cont_1={"22.05 ~ 22.05"}
            cont_2={"javascript, sass, gitLab"}
            cont_3={
              <p>
                1명
                <br />
                95%
              </p>
            }
            cont_4={
              <p>
                SASS를 사용하요 퍼블 위주로 작업하였으며 라우터를 사용하여
                페이지 전환을 하며 클릭하면 고정이 되는 탭메뉴나 슬라이드 등
                다양한 기능을 개발하였습니다.
              </p>
            }
            cont_5={
              "회사내에서 공통으로 사용하는 모듈을 제외한 모든 뼈대를 잡는 작업을 하였으며 다른 업무와 시기가 겹쳐 정식 출시는 되지 못하였습니다."
            }
            cont_6={
              <div>
                <a
                  href="https://github.com/jangar6/ac.b2b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  USER B2B WEB SITE GITHUB
                </a>
              </div>
            }
          />
        </div>
        <p className="sub-title">USER B2B WEB SITE</p>
      </div>

      {/* webSite */}
      <div className={`column-5 ${indexNum === index.web ? "active" : ""}`}>
        <p className="title">PROJECT05</p>
        <div className="contents">
          <ProjectRefo
            imageClass={"web"}
            desc={
              "반응형 웹이란 하나의 웹사이트에서 PC, 스마트폰, 태블릿 PC 등 접속하는 디스플레이의 종류에 따라 화면의 크기가 자동으로 변하도록 만든 웹페이지 접근 기법을 말합니다. 미디어 쿼리를 사용하여 이러한 반응형 사이트를 완성하였습니다. 웹 표준은 월드 와이드 웹의 측면을 서술하고 정의하는 공식 표준이나 다른 기술 규격을 가리키는 일반적인 용어입니다. 이러한 웹 표준을 준수한 사이트를 완성한 예제 입니다."
            }
            cont_1={"20.11.11 , 20.11.27"}
            cont_2={"javascript, css, git"}
            cont_3={
              <p>
                1명
                <br />
                100%
              </p>
            }
            cont_4={
              <p>
                웹 표준을 고려한 사이트와 반응형을 고려한 사이트로 퍼블위주로
                작업하였습니다.
              </p>
            }
            cont_5={
              "공부한 웹 표준과 반응형을 고려하여 메가박스 사이트를 제작해보았습니다."
            }
            cont_6={
              <div>
                <a
                  href="https://jangar6.github.io/dothome1/respansive/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WEB RESPONSIVE SITE
                </a>
                <a
                  href="https://github.com/jangar6/dothome1/tree/master/respansive"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WEB RESPONSIVE GITHUB
                </a>
                <a
                  href="https://jangar6.github.io/dothome1/wabstandard/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WEB STANDARD SITE
                </a>
                <a
                  href="https://github.com/jangar6/dothome1/tree/master/wabstandard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WEB STANDARD GITHUB
                </a>
                <a
                  href="https://github.com/jangar6/dothome1/tree/master/megabox"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MEGABOX SITE
                </a>
                <a
                  href="https://jangar6.github.io/dothome1/megabox/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MEGABOX GITHUB
                </a>
              </div>
            }
          />
        </div>
        <p className="sub-title">WEB RESPONSIVE & STANDARD</p>
      </div>

      {/* SLIDE & EFFECT */}
      <div className={`column-6 ${indexNum === index.se ? "active" : ""}`}>
        <p className="title">PROJECT06</p>
        <div className="contents">
          <ProjectRefo
            imageClass={"effect"}
            desc={
              "다양한 슬라이드 기능과 마우스를 움직일때의 이펙트들을 정리한 사이트들 입니다."
            }
            cont_1={"20.11 ~ 21.01"}
            cont_2={"javascript, jQuery, css, git"}
            cont_3={
              <p>
                1명
                <br />
                100%
              </p>
            }
            cont_4={
              <p>
                html과 css, script작성으로 다양한 슬라이드와 마우스 이펙트들을
                직접 개발해보았습니다.
              </p>
            }
            cont_5={
              "javascript로 작성한 것을 jQuery로 변환 혹은 반대로 변환하며 두 언어를 습득하는 과정이였습니다."
            }
            cont_6={
              <div>
                <a
                  href="https://jangar6.github.io/dothome1/effect/sliderEffect01-javascript.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SLIDE EFFECT SITE
                </a>
                <a
                  href="https://jangar6.github.io/dothome1/effect/mouseEffect02-javascript.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MOUSE EFFECT SITE
                </a>
                <a
                  href="https://github.com/jangar6/dothome1/tree/master/effect"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SLIDE & MOUSE EFFECT GITHUB
                </a>
              </div>
            }
          />
        </div>
        <p className="sub-title">SLIDE & ACT EFFECT</p>
      </div>
    </div>
  );
}

export default Project;
