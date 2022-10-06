import React, { useEffect } from "react";
import Menu from "../../Menu";
import usePage from "../../../redux/store/hooks/usePage";
import "./Skills.scss";

function Skills() {
  const { currentPageSkils } = usePage();
  useEffect(() => {
    currentPageSkils();
  }, []);

  return (
    <div className="skills">
      <Menu />
      <div className="text-box">
        <div className="title">
          <p>SKILS</p>
        </div>
      </div>
      <div className="image-box">
        <div className="sklis-1">
          <p className="sklis">FrontEnd</p>
          <div className="skills-image" />
        </div>
        <div className="skills-2">
          <p className="sklis">Version Control</p>
          <div className="group">
            <div className="skills-image" />
            <div className="skills-text">
              <p>Git</p>
              <p>GitHub</p>
              <p>GitLab</p>
            </div>
          </div>
        </div>
        <div className="skills-3">
          <p className="sklis">UI/UX Control</p>
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
  );
}

export default Skills;
