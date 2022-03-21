import React from 'react';

//import 'bootstrap/dist/css/bootstrap.css';

import Slider from '../frames/Slider';
import Want from '../frames/Want';
import We from '../frames/We';
import About from '../frames/About';
import Price from '../frames/Price';
import Stage from '../frames/Stage';
import Feedback from '../frames/Feedback';

const Home = () => {
  return (
    <>
        <Slider />
        <Want />
        <We />
        <About />
        <Price />
        <Stage />
        <Feedback />
    </>
  );
};

export default Home;
