import React, { Component } from 'react';
import ContactInfo from './ContactInfo';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
            "Always available at your service for any painting job and free estimates!"
              </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <ContactInfo resumeData={resumeData} />
          </aside>
        </div>
      </section>
    );
  }
}