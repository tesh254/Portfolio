import React from "react";
import Project from "../../Components/Projects/ProjectCards";
import Live from "../../Components/Projects/Live";
import InProgress from "../../Components/Projects/InProgress";
import "./index.scss";

const Projects = () => (
  <div className="projects-view">
    <section>
      <h1>Open Source Projects</h1>
      <Project />
      <h1>Live Projects</h1>
      <Live />
      <h1>Coming Soon</h1>
      <InProgress />
    </section>
  </div>
);

export default Projects;
