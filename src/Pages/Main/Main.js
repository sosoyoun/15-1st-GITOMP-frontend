import React, { Component } from "react";

import GitompSection from "./Components/GitompSection";
import ConcertSection from "./Components/ConcertSection";
import AlbumSection from "./Components/AlbumSection";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

// import SectionSlider from "./Components/SectionSlider";

import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      scrollTop: 0,
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnMount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.setState({
      scrollTop,
    });
  };
  render() {
    // const ScrollDemo = () => {
    //   const input1 = useRef(null);
    //   const executeScroll = () => input1.current.scrollIntoView();
    // };
    return (
      <>
        <div className="Scroll" onScroll={this.handleScroll}></div>
        <ScrollAnimation animateIn="fadeIn">
          <GitompSection />
          <ConcertSection />
          <AlbumSection />
        </ScrollAnimation>
        <span />
        <span />
        <span />
        <span />
        <span />
      </>
    );
  }
}

export default Main;
