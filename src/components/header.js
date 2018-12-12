import React, { Component } from 'react';
import tmdblogo from '../assets/images/tmdb.svg';

export default class Header extends Component{

  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img src={tmdblogo} width="50%"/>
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          </form>
        </div>
      </nav>
    )
  }

}
