import React from "react";

import Home from "./pages/Home";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import "./App.scss";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 6000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const App = () => {
  return (

      <Carousel responsive={responsive}>
      <Home />
      <Home1/>
      <Home2/>
      </Carousel>

  );
};

export default App;
