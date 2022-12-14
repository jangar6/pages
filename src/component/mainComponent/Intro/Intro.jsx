import React, { useEffect, useState } from "react";
import usePage from "../../../redux/store/hooks/usePage";
import Menu from "../../Menu";
import AboutMe from "../About/AboutMe";
import "./Intro.scss";

function Intro() {
  const { currentIntro, current } = usePage();
  const [aniActive, setAniActive] = useState(false);

  // useEffect(() => {
  // 	currentPageIntro();
  // }, []);

  useEffect(() => {
    currentIntro();
    setAniActive(true);
  }, []);

  return (
    <>
      <div id="Intro" className={`intro ${aniActive ? "active" : ""}`}>
        <Menu />
        <div className="text-box">
          <p className="icon">“</p>
          <div className="text">
            <p>단순 사이트 제작뿐만 아니라 기능과 콘텐츠까지,</p>
            <p>퍼블리싱과 웹 개발을 같이하는 개발자입니다.</p>
          </div>
          <p className="icon">”</p>
        </div>
        <div className="image-box">
          <div className="image" />
        </div>
      </div>
      <AboutMe />
    </>
  );
}

export default Intro;
