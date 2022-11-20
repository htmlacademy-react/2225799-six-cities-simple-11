import {MouseEvent} from 'react';
import useRating from '../../hooks/useRating';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {AppRoute, CURRENCY} from '../../const';

type CardProps = {
  offer: Offer;
  handleMouseEnter?: (offer: Offer) => void;
  handleMouseLeave?: () => void;
  classPrefix: string;
}

function Card({offer, handleMouseEnter, handleMouseLeave, classPrefix}: CardProps): JSX.Element {
  const starsWidth = useRating(offer.rating);
  const pathToOffer = AppRoute.Offer.concat('/:').concat(offer.id.toString());

  return(
    <article
      className={`${classPrefix}__card place-card`}
      onMouseEnter={(event: MouseEvent<HTMLElement>) => {handleMouseEnter && handleMouseEnter(offer);}}
      onMouseLeave={handleMouseLeave && handleMouseLeave}
    >
      {offer.isPremium
        ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        :
        ''}
      <div className={`${classPrefix}__image - wrapper place-card__image-wrapper`}>
        <Link to={`${pathToOffer}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{CURRENCY}{offer.price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
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
