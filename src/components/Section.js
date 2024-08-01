import React from 'react';
import '../index.css';

const Section = ({ title, items, sponsored }) => (
  <div className={`section ${sponsored ? 'sponsored' : ''}`}>
    <h2>{title}</h2>
    <div className="items">
      {items.map((item, index) => (
        <div key={index} className="item">
          <img src={item.imgSrc} alt={`Item ${index + 1}`} className="image-placeholder" />
          <div className="text">{item.text}</div>
          <div className="price">{item.price}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Section;
