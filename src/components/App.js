import React, { Component } from 'react';
import '../styles/App.css';
import Navbar from './Navbar';
import Cover from './Cover';
import About from './About';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Cover />
          <About />
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
