import useAppSelector from '../../hooks/useAppSelector';
import {getActiveCard, getCity, getOffersToShow} from '../../store/offers/selectors';
import {Nullable} from '../../types';
import {City} from '../../types/offer';
import {CITY_LIST_CLASS_NAME} from '../../const';
import Sorting from '../sorting/sorting';
import CardsList from '../cards-list/cards-list';
import Map from '../map/map';

function MainPageResults(): JSX.Element {
  const activeCard = useAppSelector(getActiveCard);
  const selectedCityName = useAppSelector(getCity);
  const selectedCityOffers = useAppSelector(getOffersToShow);
  const selectedCity: Nullable<City> = selectedCityOffers.length ? selectedCityOffers[0].city : null;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{selectedCityOffers.length} {selectedCityOffers.length > 1 ? 'places' : 'place'} to stay in {selectedCityName}</b>
        <Sorting/>
        <div className="cities__places-list places__list tabs__content">
          <CardsList
            offers={selectedCityOffers}
            classPrefix={CITY_LIST_CLASS_NAME}
          />
        </div>
      </section>
      <div className="cities__right-section">
        {selectedCity && <Map city={selectedCity} points={selectedCityOffers} selectedPoint={activeCard} />}
      </div>
    </div>
  );
}

export default MainPageResults;
