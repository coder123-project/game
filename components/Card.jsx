import React from 'react';
import { StyledCard } from './styles/Card.styled';

export default function Card({ game}) {
  function shortDeveloper(devNameArr) {
      let shortName = [];

      for(let i = 0; i < devNameArr.length; i += 1) {
        shortName.push(devNameArr[i].charAt(0) + ". ");
      }

      return shortName;
  }

  return (
    <StyledCard>
      <div className="card">
          <img src={game.thumbnail} className="card-img-top" alt={game.title} />
          <div className="card-body">
              <h6 className="card-title">{game.title.split(' ').length > 5 ? game.title.split(' ').splice(0,3).join(' ') : game.title}</h6>

              <p className="card-text">{game.short_description.split(" ").length > 20 ? game.short_description.split(' ').splice(0,30).join(' ') + "..." : game.short_description}</p>

              <div className='info-box'>
                  <a href="#!" className="btn btn-primary">Details</a>
                  <div>
                    <p>Genre: {game.genre}</p>
                    <p>From: {game.developer.split(' ').length > 2 ? shortDeveloper(game.developer.split(' ')) : game.developer}</p>
                  </div>
              </div>
          </div>
      </div>
    </StyledCard>
  )
}
