import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import './components/HomepageLayout.js'
import HomepageLayout from './components/HomepageLayout.js';

class App extends Component {
  render() {
    return (
      <HomepageLayout/>
    );
  }
}

export default App;
