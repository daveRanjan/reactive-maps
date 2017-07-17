import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Maps from './custom/Maps';
class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Map">
          <Maps
            zoom={14}
            center={{lat:28.5939254,lng:77.3370696}}
            containerElement={
            <div style={{ height: `100%` }} />
          }
            mapElement={
                  <div style={{ height: `100%` }} />
                } />
        </div>

      </div>
    );
  }
}

export default App;
