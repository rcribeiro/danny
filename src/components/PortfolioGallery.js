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

                <img src={`${item.imgurl[0]}`} className="item-img" />

                {isOpen && (   
                <Lightbox
                    mainSrc={item.imgurl[photoIndex]}
                    nextSrc={item.imgurl[(photoIndex + 1) % item.imgurl.length]}
                    prevSrc={item.imgurl[(photoIndex + item.imgurl.length - 1) % item.imgurl.length]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + item.imgurl.length - 1) % item.imgurl.length,
                    })
                    }
                    onMoveNextRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + 1) % item.imgurl.length,
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