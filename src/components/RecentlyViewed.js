import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../index.css';

import recommended1 from '../images/recommended1.jpg';
import recommended2 from '../images/recommended2.jpg';
import recommended3 from '../images/recommended3.jpg';
import recommended4 from '../images/recommended4.jpg';
import recommended5 from '../images/recommended5.jpg';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="items" data-value="1"><img src={recommended1} alt="viewed1" /></div>,
    <div className="items" data-value="2"><img src={recommended2} alt="viewed2" /></div>,
    <div className="items" data-value="3"><img src={recommended3} alt="viewed3" /></div>,
    <div className="items" data-value="4"><img src={recommended4} alt="viewed4" /></div>,
    <div className="items" data-value="5"><img src={recommended5} alt="viewed5" /></div>,
];

const RecentlyViewed = () => (
    <div className="recentlyviewed-page">
        <h2 className="heading">Recently Viewed</h2>
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
        />
    </div>
);

export default RecentlyViewed;
