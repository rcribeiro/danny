import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import {PageView, initGA} from './utils/GATracking';
// import AdSense from 'react-adsense';

class App extends Component {

  componentDidMount() {
    initGA('UA-165395508-1');
    PageView();
  }
  
  render() {
    return (
      <div className="App">
          {/* <AdSense.Google client='ca-pub-7690096007319887' slot='xyz' /> */}
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Testimonials resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;