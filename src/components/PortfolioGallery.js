import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

export default class PorfolioGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    let item = this.props.item;
    const { photoIndex, isOpen } = this.state;

    return (
        <div className="columns portfolio-item">
            <div className="item-wrap">
            <a onClick={() => this.setState({ isOpen: true })}>

                <picture>
                     <source srcset={`${item.imgRoot + "webp/" + item.images[0].imgName}`} type="image/webp"/>
                     <source srcset={`${item.imgRoot + item.images[0].imgName}`} type="image/jpeg"/> 
                     <img className="item-img" src={`${item.imgRoot + item.images[0].imgName}`} alt={`${item.images[0].imgDescription}`}/>
                </picture>

                {isOpen && (   
                <Lightbox
                  imageTitle = {item.images[photoIndex].imgDescription}
                  animationDuration={500}
                  mainSrc={`${item.imgRoot + "webp/" + item.images[photoIndex].imgName}`}
                  nextSrc={`${item.imgRoot + "webp/" + item.images[(photoIndex + 1) % item.images.length].imgName}`}
                  prevSrc={`${item.imgRoot + "webp/" + item.images[(photoIndex + item.images.length - 1) % item.images.length].imgName}`}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                  this.setState({
                      photoIndex: (photoIndex + item.images.length - 1) % item.images.length,
                  })
                  }
                  onMoveNextRequest={() =>
                  this.setState({
                      photoIndex: (photoIndex + 1) % item.images.length,
                  })
                  }
                />
                )}

                <div className="overlay">
                <div className="portfolio-item-meta">
                    <h5>{item.name}</h5>
                    <p>{item.description}</p>
                </div>
                </div>
            </a>
            </div>
        </div>

    );
  }
}