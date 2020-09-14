import React, { Component } from 'react';
import ContactInfo from './ContactInfo';

export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <picture>
                     <source srcset="images/webp/profilepic.jpg" type="image/webp"/>
                     <source srcset="images/profilepic.jpg" type="image/jpeg"/> 
                     <img className="profile-pic" src="images/profilepic.jpg" alt="Profile"/>
                  </picture>
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p>
                     {
                        resumeData.aboutme
                     }
                  </p>
                  <br></br>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <div className="address">
                           <span>{resumeData.name}</span>
                           <br></br>
                           <ContactInfo resumeData={resumeData} />
                           <span>
                              {resumeData.address}
                           </span>
                           <br></br>
                           <span>{resumeData.website}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}