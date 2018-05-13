import React, { Component } from 'react';
import styles from './assets/styles/App.css';
import Header from './components/Header'
import brick from './assets/images/brick.gif'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header/>
        <p className={styles.intro}>
          <img src={brick} alt='...loading'/>
        </p>
      </div>
    );
  }
}

export default App;
