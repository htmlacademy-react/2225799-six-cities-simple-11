import {useEffect, useState} from 'react';
import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import {chooseCityAction, showOffersAction} from '../../store/action';
import CardsList from '../../components/cards-list/cards-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import {Location, Offer, City} from '../../types/offer';
import {CITY_LIST_CLASS_NAME} from '../../const';
import {OFFERS} from '../../mocks/offers';
import {CITIES} from '../../const';
import {Nullable} from '../../types';

function MainPage(): JSX.Element {

  const dispatch = useAppDispatch();
  const [activeCard, setActiveCard] = useState<Location | undefined>();
  const onMouseCardHover = (offer: Offer) => {
    setActiveCard((state) => offer.location);
  };
  const onMouseCardUnhover = () => {
    setActiveCard((state) => undefined);
  };
  const selectedCityName = useAppSelector((state) => state.city);
  const handleCitySelect = (city: string) => dispatch(chooseCityAction(city));
  const selectedCityOffers = useAppSelector((state) => state.offers);
  const selectedCity: Nullable<City> = selectedCityOffers.length ? selectedCityOffers[0].city : null;
  const placesFound = selectedCityOffers.length;
  const cities = CITIES;

  useEffect(() => {
    dispatch(showOffersAction(OFFERS.filter((offer) => offer.city.name === selectedCityName)));
  }, [selectedCityName]);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <CitiesList cities={cities} onCityClick={handleCitySelect}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesFound} {placesFound > 1 ? 'places' : 'place'} to stay in {selectedCityName}</b>
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
                <CardsList offers={selectedCityOffers} onMouseCardEnter={onMouseCardHover} onMouseCardLeave={onMouseCardUnhover} classPrefix={CITY_LIST_CLASS_NAME}/>
              </div>
            </section>
            <div className="cities__right-section">
              {selectedCity && <Map city={selectedCity} points={selectedCityOffers} selectedPoint={activeCard} />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
