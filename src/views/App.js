import React, { Component } from 'react'
import '../styles/App.css'
import Navbar from '../components/Navbar'
import Cover from '../components/Cover'
import About from '../components/About'
import Services from '../components/Services'
import Footer from '../components/Footer'

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
          <Services />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
