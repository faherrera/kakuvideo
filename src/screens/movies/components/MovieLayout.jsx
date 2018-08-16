import React from 'react';

const MovieLayout = (props) => (
  <section className="movie-layout">
    <div className="container">
      {props.children}
    </div>
  </section>
);

export default MovieLayout;