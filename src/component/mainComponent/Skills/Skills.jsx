import React, { useEffect, useState } from "react";
import Menu from "../../Menu";
import usePage from "../../../redux/store/hooks/usePage";
import "./Skills.scss";

function Skills() {
  const { currentPageSkills } = usePage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    currentPageSkills();
    setOpen(true);
  }, []);

  return (
    <>
      <Menu />
      <div className={`skills ${open ? "active" : ""}`}>
        <div className="text-box">
          <p className="title">SKILLS</p>
          <p className="desc">
            개발자를 준비할 때 부터 1년 6개월 정도의 경력을 쌓으며 그동안
            공부해온 기술들입니다. <em>React</em> 기반으로 프로젝트들을
            진행하였으며 주요 기술은 <em>Javascript</em>와 <em>SASS</em> 입니다.
            어떤 개발자분은 저에게 기술보다는 얼마나 코드를 이해하고
            작성하는지가 더 중요하다 하셨습니다. 때문에 부족할지라도 기본만큼은
            확실히 쌓은 저의 기술들만 정리해보았습니다.
          </p>
        </div>
        <div className="box">
          <div className="skllis-1 ">
            <p className="skllis-name">FrontEnd</p>
            <div className="skills-image" />
          </div>
          <div className="skills-2 ">
            <p className="skllis-name">Version Control</p>
            <div className="group">
              <div className="skills-image" />
              <div className="skills-text">
                <p>Git</p>
                <p>GitHub</p>
                <p>GitLab</p>
              </div>
            </div>
          </div>
          <div className="skills-3 ">
            <p className="skllis-name">UI/UX Control</p>
            <div className="group">
              <div className="skills-image" />
              <div className="skills-text">
                <p>Figma</p>
                <p>Zeplin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
