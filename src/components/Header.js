import React, {Component} from 'react'
import headshot from '../assets/images/Headshot.jpg';
import styles from '../assets/styles/Header.css'

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <img src={headshot} className={styles.logo} alt="logo" />
        <h1 className={styles.title}>Hugh Gardiner's Github Page</h1>
      </header>
    );
  }
}

export default Header;
