import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { pageIndex } from "./redux/store/define/enum";
import Header from "./component/Header";

import "./App.scss";

function App() {
  return (
    <div className="home" id="app">
      <div className="contents">
        <HashRouter>
          <Routes>
            <Route path={pageIndex.current_header} element={<Header />} />
            {/* <Route path={pageIndex.current_main} element={<Main />} />
						<Route path={pageIndex.current_intro} element={<Intro />} />
						<Route path={pageIndex.current_skils} element={<Skills />} />
						<Route path={pageIndex.current_study} element={<Study />} />
						<Route path={pageIndex.current_project} element={<Project />} /> */}
          </Routes>
        </HashRouter>
        {/* <Contact /> */}
      </div>
    </div>
  );
}

export default App;
