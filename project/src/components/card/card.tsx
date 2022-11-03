import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {AppRoute} from '../../const';

type CardProps = {
  offer: Offer;
  handleMouseEnter: (offer: Offer) => void;
  handleMouseLeave: () => void;
}

function Card({offer, handleMouseEnter, handleMouseLeave}: CardProps): JSX.Element {
  const starsWidth = ((Math.floor(offer.rating ) / 5) * 100).toString().concat('%');
  const pathToOffer = AppRoute.Offer.concat('/:').concat(offer.id.toString());

  return(
    <article
      className="cities__card place-card"
      onMouseEnter={(event: MouseEvent<HTMLElement>) => {handleMouseEnter(offer);}}
      onMouseLeave={handleMouseLeave}
    >
      {offer.isPremium
        ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        :
        ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${pathToOffer}`}>
          <img className="place-card__image" src={offer.thumbImage} width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price.currency}{offer.price.value}</b>
            <span className="place-card__price-text">&#47;&nbsp;{offer.price.text}</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: starsWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${pathToOffer}`}>{offer.name}</Link>
        </h2>
        <p className="place-card__type">{offer.features.entire}</p>
      </div>
    </article>
  );
}

export default Card;
