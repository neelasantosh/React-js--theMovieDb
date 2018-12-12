import React, { Component } from 'react';
import Header from './components/header'
import Card from './components/card';
import './assets/css/app.css';

class App extends Component {

  componentDidMount(){
    console.log("inside componentDidUpdate");
    document.body.style.backgroundImage = 'url("https://image.tmdb.org/t/p/original/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg")'
  }

  render() {
    return (
      <div>
        <Header />
          <div className="container">
            <div className="col-12 col-lg-12">
              <div className="row">
                <div className="col-12 order-2 order-lg-1 col-md-8 moviecontent">
                  <Card />
                </div>
                <div className="col-12 order-1 order-lg-2 col-md-4 imagecontent">
                  <img className="posterimage" src="https://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg" />
                </div>
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default App;
