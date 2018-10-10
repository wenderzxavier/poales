import React, { Component } from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import Cover from './Cover';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <Cover />
      </div>
    );
  }
}

export default App;
