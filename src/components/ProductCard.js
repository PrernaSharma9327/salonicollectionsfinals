import React from 'react';

const ProductCard = ({ image, title, price, description }) => {
    const productCardStyle = {
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const productImageStyle = {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '10px',
    };

    const priceStyle = {
        fontWeight: 'bold',
        color: '#dc5f5f',
    };

    const buttonStyle = {
        display: 'block',
        width: '100%',
        margin: '10px 0',
        padding: '10px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    };

    const addToCartButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#71c2f7',
        color: '#fff',
    };

    const buyNowButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#ff7b9a',
        color: '#fff',
    };

    return (
        <div style={productCardStyle}>
            <img src={image} alt={title} style={productImageStyle} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p style={priceStyle}>{price}</p>
            <button style={addToCartButtonStyle}>Add to Cart</button>
            <button style={buyNowButtonStyle}>Buy Now</button>
        </div>
    );
}

export default ProductCard;
