import React from "react";

const Projects = () => (
  <div className="projects">
    <div className="project">
      <h3 className="project-title">Simple dark theme react app</h3>
      <span className="description">
        A simple app that can help add a dark theme onto your react app
      </span>
      <span className="stack">
        <ul>
          <li>React</li>
          <li>Javascript</li>
        </ul>
      </span>
      <div className="links">
        <a
          href="https://github.com/werickblog/simple_dark_theme_react_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
    <div className="project">
      <h3 className="project-title">Cron Jobs in Node</h3>
      <span className="description">
        A simple way to run cron jobs in Nodejs
      </span>
      <span className="stack">
        <ul>
          <li>Node</li>
          <li>Javascript</li>
        </ul>
      </span>
      <div className="links">
        <a
          href="https://github.com/werickblog/cron_jobs_with_nodejs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
    <div className="project">
      <h3 className="project-title">Docker Nodejs App</h3>
      <span className="description">Containerizing Nodejs Applications</span>
      <span className="stack">
        <ul>
          <li>Node</li>
          <li>Docker</li>
          <li>MongoDB</li>
        </ul>
      </span>
      <div className="links">
        <a
          href="https://github.com/werickblog/docker_nodejs_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
    <div className="project">
      <h3 className="project-title">Next with environment variables</h3>
      <span className="description">
        Configuring next to load environment variables
      </span>
      <span className="stack">
        <ul>
          <li>Node</li>
          <li>Next</li>
        </ul>
      </span>
      <div className="links">
        <a
          href="https://github.com/werickblog/next_with_environment_variables"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
    <div className="project">
      <h3 className="project-title">Lakra: Game Engine</h3>
      <span className="description">
        Basic Game engine built with Golang
      </span>
      <span className="stack">
        <ul>
          <li>Go</li>
        </ul>
      </span>
      <div className="links">
        <a
          href="https://github.com/tesh254/lakra"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
    <div className="project">
      <h3 className="project-title">Araknet: Blockchain network</h3>
      <span className="description">
        Based on the Dark net program in the Startup show. Araknet is a blockchain network I started building to achieve anonimity on the web and peer to peer transactions built
         entirely with Go. So far I have archieved transactions and addresses, yet to implement encrypted networks.
      </span>
      <span className="stack">
        <ul>
          <li>Go</li>
        </ul>
      </span>
      <div className="links">
        <a
          href="https://github.com/tesh254/arakent"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </div>
);

export default Projects;
