import React from 'react';

const HelpPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Help Page</h1>
      <p style={styles.text}>How can we help you? Contact us for support.</p>
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

export default HelpPage;
