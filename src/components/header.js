import React, { Component } from 'react';
import {connect} from 'react-redux';
import tmdblogo from '../assets/images/tmdb.svg';
import { Image, Search, Grid, List } from 'semantic-ui-react';
import debounce from 'lodash/debounce';
import { movieDetails } from '../actions'

const resultRenderer = ({ datares }) => <div>
    <div key={datares.id} className='content'>
    <List divided verticalAlign='middle'>
      <List.Item>
        <List.Content>{datares.title}</List.Content>
      </List.Item>
    </List>
    </div>
  </div>


class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      results: [],
      query: '',
      movieid:''
    }
    this.searchMovies = debounce(this.searchMovies.bind(this), 500);
  }

  handleResultSelect = (e, { result }) => {
    //console.log("results",result.datares.id);
    let saveresult = result.datares.id
    this.setState({
      query: result.datares.title,
      movieid: result.datares.id
    });
    //console.log("check props",this.props.movieDetails(saveresult));
    this.props.movieDetails(saveresult)
  }

  handleSearchChange = (e, { value }) => {
    this.setState({
      isLoading: true,
      results: [],
      query: value
    });
    this.searchMovies()
  }

  searchMovies = () => {
    if (this.state.query) {
      fetch(`https://api.themoviedb.org/3/search/movie?&query=`+this.state.query+`?&api_key=94ceb56d1cec3cfde6b78c4787659689`).then((res) => res.json()).then((data) => {
        this.setState({
          isLoading: true,
          results:data.results.map((item) => ({
              datares: item,
          }))
        })
      })
    }
  }

  render(){
    //console.log("state movie id",this.props);
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img src={tmdblogo} width="50%"/>
        </a>
        <div>
          <Search
            loading={false}
            showNoResults={true}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            resultRenderer={resultRenderer}
            results={this.state.results}
            showNoResults={false}
            value={this.state.query}
            size={'big'}
            {...this.props}
          />
        </div>
      </nav>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    movieDetails: moviedet => dispatch(movieDetails(moviedet))
  };
};

export default connect(null,mapDispatchToProps)(Header)
