import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { pageIndex } from "../redux/store/define/enum";
import usePage from "../redux/store/hooks/usePage";
import "./Menu.scss";

function Menu() {
  const { current } = usePage();
  // useEffect(() => {
  //   console.log(current);
  // }, []);

  return (
    <div className="menu">
      <Link
        className={`nav ${current === pageIndex.current_intro ? "active" : ""}`}
        to={pageIndex.current_intro}
      >
        ABOUT ME
      </Link>
      <Link
        className={`nav ${
          current === pageIndex.current_skills ? "active" : ""
        }`}
        to={pageIndex.current_skills}
      >
        SKILLS
      </Link>
      <Link
        className={`nav ${current === pageIndex.current_study ? "active" : ""}`}
        to={pageIndex.current_study}
      >
        STUDY
      </Link>
      <Link
        className={`nav ${
          current === pageIndex.current_project ? "active" : ""
        }`}
        to={pageIndex.current_project}
      >
        PROJECT
      </Link>
    </div>
  );
}

export default Menu;
