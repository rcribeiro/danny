import React, { Component } from 'react';
import PortfolioGallery from './PortfolioGallery';

// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

export default class Porfolio extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     photoIndex: 0,
  //     isOpen: false,
  //   };
  // }

  render() {
    let resumeData = this.props.resumeData;
    // const { photoIndex, isOpen } = this.state;

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Recent Work.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (
                    <PortfolioGallery item={item} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}