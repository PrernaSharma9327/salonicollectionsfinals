import React from 'react';
import Filter from './Filter';
import ProductCard from './ProductCard';

// Import images
import product1 from '../images/product1.png';
import product2 from '../images/product2.png';
import product3 from '../images/product3.png';
import product4 from '../images/product4.png';
import product5 from '../images/product5.png';
import product6 from '../images/product6.png';
import product7 from '../images/product7.png';
import product8 from '../images/product8.png';
import product9 from '../images/product9.png';

const products = [
    { image: product1, title: 'Product 1', price: '$0', description: 'Body text' },
    { image: product2, title: 'Product 2', price: '$0', description: 'Body text' },
    { image: product3, title: 'Product 3', price: '$0', description: 'Body text' },
    { image: product4, title: 'Product 4', price: '$0', description: 'Body text' },
    { image: product5, title: 'Product 5', price: '$0', description: 'Body text' },
    { image: product6, title: 'Product 6', price: '$0', description: 'Body text' },
    { image: product7, title: 'Product 7', price: '$0', description: 'Body text' },
    { image: product8, title: 'Product 8', price: '$0', description: 'Body text' },
    { image: product9, title: 'Product 9', price: '$0', description: 'Body text' },
];

const ProductPage = () => {
    const productPageStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    };

    const mainContentStyle = {
        display: 'flex',
        flex: 1,
    };

    const productGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
        padding: '20px',
        width: 'calc(100% - 250px)', // Adjust width to account for the sidebar
        overflowY: 'auto',
    };

    return (
        <div style={productPageStyle}>
            <div style={mainContentStyle}>
                <Filter />
                <div style={productGridStyle}>
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
