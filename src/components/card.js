import React, { Component } from 'react';
import {connect} from 'react-redux';
import Trailer from './trailer';
import { Button, Icon } from 'semantic-ui-react'
import NotAvailable from '../assets/images/Poster_not_available.jpg'
import _ from 'lodash';
var numeral = require('numeral');

class Card extends Component{

  constructor(props){
    super(props)
    this.state={
      title:'',
      description:'',
      tagline:'',
      moviedata:'',
      movieidstate:'',
      modalOpen:false,
    }
  }

  handleOpen = () => {
    console.log("cliked play");
    this.setState({ modalOpen: !this.state.modalOpen })
  }

  fetchMovieID(idnum) {
    //console.log("propsid",idnum);
    let url = `https://api.themoviedb.org/3/movie/`+idnum+`?&api_key=94ceb56d1cec3cfde6b78c4787659689&append_to_response=videos`
    this.fetchApi(url)
  }

  fetchApi(url) {
    //console.log(url);
    fetch(url).then((res) => res.json()).then((data) => {
      console.log("data",data);
      this.setState({
        moviedata:data
      })
    })

  }

  componentDidUpdate() {
    let backdropIMG = 'https://image.tmdb.org/t/p/original' + this.state.moviedata.backdrop_path;
    document.body.style.backgroundImage = 'url(' + backdropIMG + ')';
  }


  componentWillMount(){
    this.fetchMovieID(this.props.movieidnum)
  }

  componentWillReceiveProps(nextProps){
    this.fetchMovieID(nextProps.movieidnum)
  }

  render(){
    let generes = this.state.moviedata.genres
    let production = this.state.moviedata.production_companies
    let generesArr = []
    let productionArr = []

    _.map(generes,function(item){
      generesArr.push(item.name)
    })

    _.map(production,function(item){
      productionArr.push(item.name)
    })

    let posterPath = 'https://image.tmdb.org/t/p/w500/'+this.state.moviedata.poster_path

    return(
      <div>
        <div className="row">
          <div className="col-12 order-2 order-lg-1 col-md-8 moviecontent">
            <div className="moviebody">
              <div className="card-body">
                <h1 className="card-title">{this.state.moviedata.original_title}</h1>
                <h4 className="card-text headertext">{this.state.moviedata.tagline!==undefined ? this.state.moviedata.tagline : 'NA'}</h4>
                <p className="card-text">{this.state.moviedata.overview}</p>
              </div>

              <div className="card-body">
                <h4 className="card-text headertext">Genere : {!_.isEmpty(generesArr) ?  generesArr.join(' , ') : 'NA'}</h4>
                <p className="card-text headertext">Production Companies : {!_.isEmpty(productionArr) ? productionArr.join(' , ') : 'NA'}</p>
              </div>

              <div className="row">
                <div className="col-6 col-md-6">
                  <div className="card-body">
                    <h6 className="card-text">Released Date: </h6>
                    <h4 className="card-text headertext">{this.state.moviedata.release_date!==undefined ? this.state.moviedata.release_date : 'NA'}</h4>
                  </div>

                  {/*<div className="card-body">
                    <h6 className="card-text">Budget: </h6>
                    <h4 className="card-text headertext">$116,000,000</h4>
                  </div>*/}

                  <div className="card-body">
                    <h6 className="card-text">Box Office Collections: </h6>
                    <h4 className="card-text headertext">{this.state.moviedata.revenue!==undefined ? numeral(this.state.moviedata.revenue).format('($0,0)') : 'NA'}</h4>
                  </div>

                </div>
                <div className="col-6 col-md-6">
                  <div className="card-body">
                    <h6 className="card-text">Duration: </h6>
                    <h4 className="card-text headertext">{this.state.moviedata.runtime!==undefined ? this.state.moviedata.runtime : 'NA'} mins</h4>
                  </div>
                  <div className="card-body">
                    <h6 className="card-text">Review Ratings: </h6>
                    <h4 className="card-text headertext">{this.state.moviedata.vote_average!==undefined ? this.state.moviedata.vote_average : 'NA'} / 10</h4>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="card-body">
                    <h6 className="card-text">Trailer: </h6>
                    <Button circular icon='play circle outline' onClick={this.handleOpen}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 order-1 order-lg-2 col-md-4 imagecontent">
            {this.state.moviedata.poster_path!=null ? <img className="posterimage" src={posterPath} alt="poster image"/> : <img src={NotAvailable}/>}
          </div>
        </div>
        {this.state.modalOpen ? <Trailer handleOpen={this.handleOpen} movietrailer={this.state.moviedata.videos}/> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    movieidnum:state.movieidnum
  };
}

export default connect(mapStateToProps)(Card)
