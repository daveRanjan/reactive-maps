import React, {Component} from 'react';
import './App.css';
import SimpleForm from './custom/PlacesForm';
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <SimpleForm/>
      </div>
    );
  }
}

export default App;
