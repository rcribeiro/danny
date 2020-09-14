import React, { Component } from 'react';
import {Event} from '../utils/GATracking';

export default class ContactUs extends Component {
    render() {
      let resumeData = this.props.resumeData;
      return (
        <div className="widget">
          <div>
            <a href={`tel:${resumeData.cellPhone}`} title="Call for painting quote" onClick={()=> Event("CONTACT", "Clicked on cellphone icon", "CONTACT_SECTION")}>
                <i className='fa fa-mobile-phone fa-2x'/>
            </a>
                {resumeData.cellPhone}
          </div>
          <div>
            <a href={`mailto:${resumeData.eMail}?subject=Painting quote`} target="_blank" rel="noopener noreferrer" title="Mail for painting quote" onClick={()=> Event("CONTACT", "Clicked on e-mail icon", "CONTACT_SECTION")}>
                <i className='fa fa-envelope-o fa-lg' />
            </a>
                {resumeData.eMail}
          </div>
        </div>
      );
    }
  }

