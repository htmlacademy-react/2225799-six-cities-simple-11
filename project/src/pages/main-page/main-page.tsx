import {useState} from 'react';
import CardsList from '../../components/cards-list/cards-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import {Location, Offers, Offer, City} from '../../types/offer';
import {CITY_LIST_CLASS_NAME} from '../../const';


type MainPageProps = {
  placesFound: number;
  offers: Offers;
  city: City;
}

function MainPage({placesFound, offers, city}: MainPageProps): JSX.Element {

  const [activeCard, setActiveCard] = useState<Location | undefined>();
  const onMouseCardHover = (offer: Offer) => {
    setActiveCard((state) => offer.location);
  };

  const onMouseCardUnhover = () => {
    setActiveCard((state) => undefined);
  };

  return (
    <>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active" href="/">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesFound} {placesFound > 1 ? 'places' : 'place'} to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <CardsList offers={offers} onMouseCardEnter={onMouseCardHover} onMouseCardLeave={onMouseCardUnhover} classPrefix={CITY_LIST_CLASS_NAME}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map city={city} points={offers} selectedPoint={activeCard} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;
