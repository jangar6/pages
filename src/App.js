import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { pageIndex } from "./redux/store/define/enum";
import Header from "./component/Header";
import Intro from "./component/mainComponent/Intro/Intro";
import Skills from "./component/mainComponent/Skills/Skills";
import Study from "./component/mainComponent/Study/Study";
import Project from "./component/mainComponent/Project/Project";
import Contact from "./component/Contact";
import Main from "./component/Main";

import "./App.scss";

function App() {
  return (
    <div className="home" id="app">
      <div className="contents">
        <HashRouter>
          <Routes>
            <Route path={pageIndex.current_header} element={<Header />} />
            <Route path={pageIndex.current_main} element={<Main />} />
            <Route path={pageIndex.current_intro} element={<Intro />} />
            <Route path={pageIndex.current_skills} element={<Skills />} />
            <Route path={pageIndex.current_study} element={<Study />} />
            <Route path={pageIndex.current_project} element={<Project />} />
          </Routes>
        </HashRouter>
        <Contact />
      </div>
    </div>
  );
}

export default App;
