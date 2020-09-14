import React, { Component } from 'react';
import {Event} from '../utils/GATracking';

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {
                resumeData.socialLinks && resumeData.socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" onClick={()=> Event("FOOTER", "Clicked on "+item.name+" icon", "FOOTER_SECTION")}>
                        <i className={item.className} />
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    );
  }
}