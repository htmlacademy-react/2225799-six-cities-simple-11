import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import cn from 'classnames';
import {chooseCityAction, selectSortingTypeAction, showOffersAction} from '../../store/action';
import CardsList from '../../components/cards-list/cards-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import {Location, Offer, City} from '../../types/offer';
import {CITY_LIST_CLASS_NAME} from '../../const';
// import {OFFERS} from '../../mocks/offers';
import {CITIES} from '../../const';
import {Nullable} from '../../types';
import Sorting from '../../components/sorting/sorting';
import {SortingTypeName} from '../../const';
import {store} from '../../store';
import {fetchOffersAction} from '../../store/api-actions';

store.dispatch(fetchOffersAction());
type OffersSorterOutput = (a:Offer, b:Offer) => number;

const sortOffers = (sortingType: string):OffersSorterOutput | undefined => {
  switch (sortingType){
    case SortingTypeName.PriceLowToHigh: return (a: Offer, b: Offer):number => a.price - b.price;
    case SortingTypeName.PriceHighToLow: return (a: Offer, b: Offer):number => b.price - a.price;
    case SortingTypeName.TopRatedFirst: return (a: Offer, b: Offer):number => b.rating - a.rating;
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
  const offers = useAppSelector((state) => state.offers);
  const selectedCityName = useAppSelector((state) => state.city);
  const handleCitySelect = (city: string) => dispatch(chooseCityAction(city));
  const selectedCityOffers = useAppSelector((state) => state.offersToShow);
  const selectedCity: Nullable<City> = selectedCityOffers.length ? selectedCityOffers[0].city : null;
  const cities = CITIES;
  const selectedSortingOption = useAppSelector((state) => state.sortingType);
  const handleSortingOptionClick = (sortingOption: string) => dispatch(selectSortingTypeAction(sortingOption));
  // const offersToShow = dispatch(showOffersAction);
  // const loadedOffers = useAppSelector((state) => state.)

  useEffect(() => {

    dispatch(showOffersAction(offers.filter((offer) => offer.city.name === selectedCityName).sort(sortOffers(selectedSortingOption))));
  }, [selectedCityName, selectedSortingOption, offers, dispatch]);

  return (
    <>
      <Helmet>
        <title>six cities simple</title>
      </Helmet>
      <div className="page page--gray page--main">
        <Header/>
        <main
          className={cn(
            'page__main',
            'page__main--index',
            {'page__main--index-empty' : !selectedCityOffers.length})}
        >
          <CitiesList cities={cities} onCityClick={handleCitySelect}/>
          <div className="cities">
            {
              selectedCityOffers.length ?
                (
                  <div className="cities__places-container container">
                    <section className="cities__places places">
                      <h2 className="visually-hidden">Places</h2>
                      <b className="places__found">{selectedCityOffers.length} {selectedCityOffers.length > 1 ? 'places' : 'place'} to stay in {selectedCityName}</b>
                      <Sorting onSortingOptionClick={handleSortingOptionClick}/>
                      <div className="cities__places-list places__list tabs__content">
                        <CardsList
                          offers={selectedCityOffers}
                          onMouseCardEnter={onMouseCardHover}
                          onMouseCardLeave={onMouseCardUnhover}
                          classPrefix={CITY_LIST_CLASS_NAME}
                        />
                      </div>
                    </section>
                    <div className="cities__right-section">
                      {selectedCity && <Map city={selectedCity} points={selectedCityOffers} selectedPoint={activeCard} />}
                    </div>
                  </div>
                )
                :
                (
                  <div className="cities__places-container cities__places-container--empty container">
                    <section className="cities__no-places">
                      <div className="cities__status-wrapper tabs__content">
                        <b className="cities__status">No places to stay available</b>
                        <p className="cities__status-description">We could not find any property available at the moment
                          in {selectedCityName}
                        </p>
                      </div>
                    </section>
                    <div className="cities__right-section"></div>
                  </div>
                )
            }
          </div>
        </main>
      </div>
    </>
  );
}

export default MainPage;
