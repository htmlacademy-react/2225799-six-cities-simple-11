import useRating from '../../hooks/useRating';
import cn from 'classnames';
import Header from '../../components/header/header';
import ReviewForm from '../../components/review-form/review-form';
import CommentsList from '../../components/comments-list/comments-list';
import Map from '../../components/map/map';
import CardsList from '../../components/cards-list/cards-list';
import {Reviews} from '../../types/review';
import {Offer, Offers} from '../../types/offer';
import {MAP_HEIGHT, NEAR_PLACES_LIST_CLASS_NAME, HOST_AVATAR_SIZE} from '../../const';

type OfferPageProps = {
  comments: Reviews;
  commentsNumber: number;
  offer: Offer;
  offersNearby: Offers;
}

function Room({comments, commentsNumber, offer, offersNearby}: OfferPageProps): JSX.Element {
  const starsWidth = useRating(offer.rating);
  const mapPoints = offersNearby.concat(offer);

  return (
    <>
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((image, index) => {
                const keyValue = index.toString() + offer.id.toString().concat('-').concat(image);

                return(
                  <div className="property__image-wrapper" key={keyValue}>
                    <img className="property__image" src={image} alt={offer.type}/>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">{offer.title}</h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: starsWidth}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} {offer.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} {offer.maxAdults > 1 ? 'adults' : 'adult'}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((goodsItem) => {
                    const keyValue = offer.id.toString().concat('-').concat(goodsItem.trim());

                    return(
                      <li className="property__inside-item" key={keyValue}>{goodsItem}</li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={cn(
                      'property__avatar-wrapper',
                      'user__avatar-wrapper',
                      {'property__avatar-wrapper--pro' : offer.host.isPro}
                    )}
                  >
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width={HOST_AVATAR_SIZE} height={HOST_AVATAR_SIZE} alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">{offer.host.name}</span>
                  {offer.host.isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">{offer.description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsNumber}</span></h2>
                <CommentsList comments={comments}/>
                <ReviewForm/>
              </section>
            </div>
          </div>
          <Map city={offer.city} points={mapPoints} mapHeight={MAP_HEIGHT} selectedPoint={offer.location}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardsList offers={offersNearby} classPrefix={NEAR_PLACES_LIST_CLASS_NAME}/>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Room;
