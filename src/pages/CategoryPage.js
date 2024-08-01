import React from 'react';

const CategoryPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Category Page</h1>
      <p style={styles.text}>Browse our categories of cushion covers and more.</p>
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

export default CategoryPage;
