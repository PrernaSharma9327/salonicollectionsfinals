import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../index.css';


import saree1 from '../images/saree1.png';
import saree2 from '../images/saree2.png';
import saree3 from '../images/saree3.png';
import saree4 from '../images/saree4.png';
import saree5 from '../images/saree5.png';

const items = [
    <div className="item" data-value="1"><img src={saree1} alt="saree1" /></div>,
    <div className="item" data-value="2"><img src={saree2} alt="saree2" /></div>,
    <div className="item" data-value="3"><img src={saree3} alt="saree3"/></div>,
    <div className="item" data-value="4"><img src={saree4} alt="saree4" /></div>,
    <div className="item" data-value="5"><img src={saree5} alt="saree5" /></div>,
];

const Carousel = () => (
    <AliceCarousel
        autoPlay
        
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
    />
);

export default Carousel;
