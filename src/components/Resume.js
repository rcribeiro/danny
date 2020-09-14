import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row paintings">
          <div className="three columns header-col">
            <h1><span>Paintings</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resumeData.paintings && resumeData.paintings.map((item) => {
                return (
                  <div className="row item" key={item.PaintingType}>
                    <div className="twelve columns">
                      <h3>{item.PaintingType}</h3>
                      <p className="info">
                        {item.description}
                      </p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>
              {resumeData.skillsDescription}
            </p>
            <div className="bars">
              <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return (
                      <li key={item.skillname}>
                        <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                        </span><em>{item.skilldisplay}</em>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}