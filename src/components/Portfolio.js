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
                    // <div className="columns portfolio-item">
                    //   <div className="item-wrap">
                    //     <a onClick={() => this.setState({ isOpen: true })}>

                    //       <img src={`${item.imgurl[0]}`} className="item-img" />

                    //       {isOpen && (   
                    //         <Lightbox
                    //           mainSrc={item.imgurl[photoIndex]}
                    //           nextSrc={item.imgurl[(photoIndex + 1) % item.imgurl.length]}
                    //           prevSrc={item.imgurl[(photoIndex + item.imgurl.length - 1) % item.imgurl.length]}
                    //           onCloseRequest={() => this.setState({ isOpen: false })}
                    //           onMovePrevRequest={() =>
                    //             this.setState({
                    //               photoIndex: (photoIndex + item.imgurl.length - 1) % item.imgurl.length,
                    //             })
                    //           }
                    //           onMoveNextRequest={() =>
                    //             this.setState({
                    //               photoIndex: (photoIndex + 1) % item.imgurl.length,
                    //             })
                    //           }
                    //         />
                    //       )}

                    //       <div className="overlay">
                    //         <div className="portfolio-item-meta">
                    //           <h5>{item.name}</h5>
                    //           <p>{item.description}</p>


                    //         </div>
                    //       </div>
                    //     </a>
                    //   </div>
                    // </div>
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