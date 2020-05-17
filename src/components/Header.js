import React, { Component } from 'react';
import {Event} from '../utils/GATracking';

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>

        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about" onClick={()=> Event("ABOUT", "Clicked on About navigation option", "ABOUT_SECTION")}>About</a></li>
              <li><a className="smoothscroll" href="#resume" onClick={()=> Event("SKILLS", "Clicked on Paintings & Skills navigation option", "SKILLS_SECTION")}>Paintings & Skills</a></li>
              <li><a className="smoothscroll" href="#portfolio" onClick={()=> Event("WORKS", "Clicked on Works navigation option", "WORKS_SECTION")}>Works</a></li>
              <li><a className="smoothscroll" href="#testimonials" onClick={()=> Event("TESTIMONIALS", "Clicked on Testimonials navigation option", "TESTIMONIALS_SECTION")}>Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact" onClick={()=> Event("CONTACT", "Clicked on Contact navigation option", "CONTACT_SECTION")}>Contact</a></li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{resumeData.name}</h1>
              <h3 style={{ color: '#7A7A7A', fontFamily: 'sans-serif ' }}>I am the local {resumeData.role}<br></br>{resumeData.roleDescription}
              </h3>
              <hr />
              <ul className="social">
                {
                  resumeData.socialLinks && resumeData.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank" onClick={()=> Event("HEADER", "Clicked on "+item.name+" icon", "HEADER_SECTION")}><i className={item.className}></i></a>
                      </li>
                    )
                  }
                  )
                }
              </ul>
            </div>
          </div>

          <p className="scrolldown">
          <a className="smoothscroll" title="Go Down" href="#about"><i className="icon-down-circle"></i></a>
          </p>

        </header>
      </React.Fragment>
    );
  }
}