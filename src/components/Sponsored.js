import React from 'react';
import '../index.css';

import saree1 from '../images/saree1.png';
import saree2 from '../images/saree2.png';
import saree5 from '../images/saree5.png';
import saree4 from '../images/saree4.png';


const Sponsored = () => (
    <div className="sponsored-section">
        <h2 className="heading">Sponsored</h2>
        <div className="sponsored-items">
            <div className="sponsored-item"><img src={saree1} alt="sponsored1" /></div>
            <div className="sponsored-item"><img src={saree2} alt="sponsored2" /></div>
            <div className="sponsored-item"><img src={saree5} alt="sponsored5" /></div>
            <div className="sponsored-item"><img src={saree4} alt="sponsored4" /></div>
            
        </div>
    </div>
);

export default Sponsored;
