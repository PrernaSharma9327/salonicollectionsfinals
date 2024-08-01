import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../index.css';

import saree1 from '../images/saree1.png';
import saree2 from '../images/saree2.png';
import saree3 from '../images/saree3.png';
import saree4 from '../images/saree4.png';
import saree5 from '../images/saree5.png';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="items2" data-value="1"><img src={saree1} alt="saree1" /></div>,
    <div className="items2" data-value="2"><img src={saree2} alt="saree2" /></div>,
    <div className="items2" data-value="3"><img src={saree3} alt="saree3"/></div>,
    <div className="items2" data-value="4"><img src={saree4} alt="saree4" /></div>,
    <div className="items2" data-value="5"><img src={saree5} alt="saree5" /></div>,
];

const TopRatedPage = () => (
    <div className="topratedpage-page">
        <h2 className="heading">TOP RATED PRODUCTS</h2>
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
        />
    </div>
);

export default TopRatedPage;
