import API from './config';

const MOVIES_ENDPOINTS = {
  LIST_MOVIES: "list_movies.json", //URI para llamar a todas las peliculas
  MOVIE_DETAIL: "movie_details.json?movie_id=" //URI para llamar a una pelicula en especifico.
}

const MovieService = { //Objeto Movie Service
  getAll: () => new Promise(
    (resolve,reject) => {
      API.get(MOVIES_ENDPOINTS.LIST_MOVIES)
      .then(
        res => res.data.data.movies
      )
      .then(
        data => resolve(data)
      )
      .catch(
        err => reject(err)
      )
    }
  ), // Funcion que nos devolverá el valor de todas las peliculas
  get: (id) => new Promise(
    (resolve,reject) => {
      API.get(MOVIES_ENDPOINTS.MOVIE_DETAIL+id)
      .then(
        res => res.data.data.movie
      )
      .then(
        data => resolve(data)
      )
      .catch(
        err => reject(err)
      )      
    }
  ), //Funcion que nos devolverá el valor de una pelicula, la cual buscaremos via ID.

}

export default MovieService;


