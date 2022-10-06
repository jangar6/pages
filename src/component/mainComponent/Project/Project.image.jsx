import React from "react";
import "./Project.image.scss";

function ProjectImage({ name }) {
  return (
    <div className={`image-box ${name}`}>
      <div className="image" />
      <div className="image" />
    </div>
  );
}

export default ProjectImage;
