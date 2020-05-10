import React, { Component } from 'react';
import {Event} from '../utils/GATracking';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any painting job and free estimates!
              </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>
                <a href={`tel:${resumeData.cellPhone}`} title="Call for painting quote" onClick={()=> Event("CONTACT", "Clicked on cellphone icon", "CONTACT_SECTION")}>
                  <i className='fa fa-mobile-phone fa-2x'/>
                </a>
                  {resumeData.cellPhone}
              </h4>
              <h4>
                <a href={`mailto:${resumeData.eMail}?subject=Painting quote`} target="_blank" title="Mail for painting quote" onClick={()=> Event("CONTACT", "Clicked on e-mail icon", "CONTACT_SECTION")}>
                  <i className='fa fa-envelope-o fa-lg' />
                </a>
                  {resumeData.eMail}
              </h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}