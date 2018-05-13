import React, {Component} from 'react'
import headshot from '../assets/images/Headshot.jpg';
import styles from '../assets/styles/Header'

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
          <img src={headshot} className={styles.title} alt="logo" />
          <h1 className="App-title">Hugh Gardiner</h1>
        </header>
    );
  }
}

export default Header;
