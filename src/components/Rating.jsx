/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="rating">{ rating }</p>
    );
  }
}
Rating.propTypes = { rating: PropTypes.number.isRequired };

export default Rating;
