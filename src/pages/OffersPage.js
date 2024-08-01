import React from 'react';

const OffersPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Offers Page</h1>
      <p style={styles.text}>Check out our latest offers and discounts.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px'
  },
  title: {
    fontSize: '2em',
    margin: '20px 0'
  },
  text: {
    fontSize: '1.2em',
    color: '#666'
  }
};

export default OffersPage;
