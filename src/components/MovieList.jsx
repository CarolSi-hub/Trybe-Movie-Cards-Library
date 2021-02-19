/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

// source = https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };
MovieList.defaultProps = { movies: [] };

export default MovieList;
