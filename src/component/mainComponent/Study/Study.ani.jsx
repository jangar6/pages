import React from "react";
import "./Study.ani.scss";

function StudyAni() {
  return (
    <div className="ani-contain">
      <svg viewBox="0 0 1000 1000">
        <symbol id="s-text">
          <text x="50%" y="50%" dy="100px" textAnchor="middle">
            FRONTEND
          </text>
        </symbol>

        <g>
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
        </g>
      </svg>
    </div>
  );
}

export default StudyAni;
