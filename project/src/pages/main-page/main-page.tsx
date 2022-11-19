import {useEffect, useState} from 'react';
import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import {chooseCityAction, selectSortingTypeAction, showOffersAction} from '../../store/action';
import CardsList from '../../components/cards-list/cards-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import {Location, Offer, City} from '../../types/offer';
import {CITY_LIST_CLASS_NAME} from '../../const';
import {OFFERS} from '../../mocks/offers';
import {CITIES} from '../../const';
import {Nullable} from '../../types';
import Sorting from '../../components/sorting/sorting';
import {SortingTypeNames} from '../../const';

type OffersSorterOutput = (a:Offer, b:Offer) => number;

const offersSorter = (sortingType: string):OffersSorterOutput | undefined => {
  switch (sortingType){
    case SortingTypeNames.PRICE_LOW_TO_HIGH: return (a: Offer, b: Offer):number => a.price - b.price;
    case SortingTypeNames.PRICE_HIGH_TO_LOW: return (a: Offer, b: Offer):number => b.price - a.price;
    case SortingTypeNames.TOP_RATED_FIRST: return (a: Offer, b: Offer):number => b.rating - a.rating;
  }
};

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
  const selectedSortingOption = useAppSelector((state) => state.sortingType);
  const handleSortingOptionClick = (sortingOption: string) => dispatch(selectSortingTypeAction(sortingOption));

  useEffect(() => {
    dispatch(showOffersAction(OFFERS.filter((offer) => offer.city.name === selectedCityName).sort(offersSorter(selectedSortingOption))));
  }, [selectedCityName, selectedSortingOption]);

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
              <Sorting onSortingOptionClick={handleSortingOptionClick}/>
              <div className="cities__places-list places__list tabs__content">
                <CardsList
                  offers={selectedCityOffers}
                  onMouseCardEnter={onMouseCardHover} onMouseCardLeave={onMouseCardUnhover}
                  classPrefix={CITY_LIST_CLASS_NAME}
                />
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
