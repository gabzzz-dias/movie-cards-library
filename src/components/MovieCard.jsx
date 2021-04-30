import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
        <section>
          <img src={ imagePath } alt={ title }/>
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
        </section>
        <section>
          { rating }
        </section>
      </div>
    );
  }
}

export default MovieCard;
