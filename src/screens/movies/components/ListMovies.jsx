import React from 'react'

const ListMovies = (props) =>(
  <ul>
    {
      props.data.length > 0 //Si la variable props contiene una propiedad con una longitud mayor a 0
      ? props.data.map(
        (movie,index) => (
          <li key={index}>
            {index + 1} - {movie.title_long}
          </li>
        )
      )
      : <li> No tengo Movies aún! </li>
    }
  </ul>
);

export default ListMovies;