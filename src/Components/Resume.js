import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <div className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </div>
            <div>{education.description}</div>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        const projects = work.project
          ? work.project.map((project) => (
              <div>
                <h3 className="project-label">
                  <i className="fa fa-book project-logo"></i>
                  {project.name}
                </h3>
                <div>
                  {project.roles
                    ? project.roles.map((role) => <div>{role}</div>)
                    : ""}
                </div>
                <b>Environnements techniques : </b>
                <i>{project.technos}</i>
              </div>
            ))
          : null;
        return (
          <div key={work.company}>
            <h3 className="company-label">{work.company}</h3>
            <div className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </div>
            <div className="description">{work.description}</div>
            <div>{projects}</div>
          </div>
        );
      });
      var side = this.props.data.side.map(function (side) {
        const projects = side.project
          ? side.project.map((project) => (
              <div>
                <h3 className="project-label">
                  <i className="fa fa-book project-logo"></i>
                  {project.name}
                </h3>
                <div>
                  {project.roles
                    ? project.roles.map((role) => <div>{role}</div>)
                    : ""}
                </div>
                <b>Environnements techniques : </b>
                <i>{project.technos}</i>
              </div>
            ))
          : null;
        return (
          <div key={side.company}>
            <h3 className="company-label">{side.company}</h3>
            <div className="info">
              {side.title}
              <span>&bull;</span> <em className="date">{side.years}</em>
            </div>
            <div className="description">{side.description}</div>
            <div>{projects}</div>
            <a className="show-more" href={side.link} target="_blank">
              Découvrir le projet
            </a>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Side projects</span>
            </h1>
          </div>

          <div className="nine columns main-col">{side}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div>{skillmessage}</div>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
