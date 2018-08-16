import React, { Component } from 'react';
import MovieLayout from '../components/MovieLayout';
import ListMovies from '../components/ListMovies';
import MovieService from '../../../services/MovieService';

export default class MoviesContainer extends Component {
  state = {
    data: [],
  }
  
  componentDidMount = () => {
    this.getAllMovies();  
  }

  getAllMovies = () => {
    MovieService.getAll()
    .then(
      movies => this.setState({
        data:movies,
      })
    )
    .catch(
      err => console.log("Ocurrió un error",err)
    )
  } 

  render() {
    return (
      <MovieLayout>
        <h1> Listado de peliculas </h1>

        <ListMovies 
          data={this.state.data}
        />
        
      </MovieLayout>
    );
  }
}
