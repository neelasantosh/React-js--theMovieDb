import React, { Component } from 'react';
import Header from './components/header'
import Card from './components/card';

import './assets/css/app.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="col-12 col-lg-12">
            <Card/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
