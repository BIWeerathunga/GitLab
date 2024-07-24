import React from 'react';

function Navbar() {
  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>
      <span style={{ ...styles.tec, marginRight: '10px' }}>Events</span>
      <span style={styles.cafe}>Management</span>
      </div>
      <div style={styles.links}>
        <a href="/" style={styles.link1}>Sign Out</a>
        <a href="/allevents" style={styles.link}>Events</a>
        <a href="/allevents" style={styles.link}>Home</a>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 30px',
    backgroundColor: '#36454F',
  },
  logo: {
    fontSize: '26px',
    fontWeight: 'bold',
  },
  tec: {
    color: 'white',
  },
  cafe: {
    color: 'yellow',
  },
  links: {
 
    gap: '45px',
  
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '23px',
    marginLeft: '-200px', 
  },
  link1: {
    color: 'yellow',
    textDecoration: 'none',
    fontSize: '23px',
    marginLeft: '-200px', 
  },

};

export default Navbar;