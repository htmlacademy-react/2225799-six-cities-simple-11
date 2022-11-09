import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {AppRoute, CURRENCY} from '../../const';

type CardProps = {
  offer: Offer;
  handleMouseEnter: (offer: Offer) => void;
  handleMouseLeave: () => void;
}

function Card({offer, handleMouseEnter, handleMouseLeave}: CardProps): JSX.Element {
  const starsWidth = ((Math.round(offer.rating ) / 5) * 100).toString().concat('%');
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
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{CURRENCY}{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: starsWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${pathToOffer}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Card;
