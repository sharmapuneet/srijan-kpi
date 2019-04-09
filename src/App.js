import React, { Component } from 'react';
import IntegrationDownshift from './components/IntegrationDownshift';
import './App.css';

class App extends Component {

  render() {
    return (
      <div style = {{ marginTop: 40, marginLeft: 50 }}>
        <IntegrationDownshift />
      </div>
      );
    }
  }

export default App;