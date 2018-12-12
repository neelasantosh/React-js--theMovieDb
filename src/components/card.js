import React, { Component } from 'react';

export default class Card extends Component{

  render(){
    return(
      <div className="moviebody">
        <div className="card-body">
          <h1 className="card-title">Interstellar</h1>
          <h4 className="card-text headertext">ManKind was born on earth. It was never meant to die here.</h4>
          <p className="card-text">Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.</p>
        </div>

        <div className="card-body">
          <h4 className="card-text  headertext">Adventure, Drama, Science Fiction</h4>
          <p className="card-text">Legendary Entertainment, Syncopy, Lynda Obst Productions</p>
        </div>

        <div class="row">
          <div class="col-6 col-md-6">
            <div className="card-body">
              <h6 className="card-text">Released Date: </h6>
              <h4 className="card-text headertext">05-11-2014</h4>
            </div>

            {/*<div className="card-body">
              <h6 className="card-text">Budget: </h6>
              <h4 className="card-text headertext">$116,000,000</h4>
            </div>*/}

            <div className="card-body">
              <h6 className="card-text">Box Office Collections: </h6>
              <h4 className="card-text headertext">$675,120,017</h4>
            </div>

          </div>
          <div class="col-6 col-md-6">
            <div className="card-body">
              <h6 className="card-text">Duration: </h6>
              <h4 className="card-text headertext">2.81 hours</h4>
            </div>
            <div className="card-body">
              <h6 className="card-text">Review Ratings: </h6>
              <h4 className="card-text headertext">8.2 / 10</h4>
            </div>
          </div>
        </div>

      </div>

    )
  }


}
