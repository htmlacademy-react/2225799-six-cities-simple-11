import {Link} from 'react-router-dom';
import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import {getCity} from '../../store/offers/selectors';
import {CITIES} from '../../const';
import {AppRoute} from '../../const';
import {chooseCityAction} from '../../store/offers/offers';

function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedCityName = useAppSelector(getCity);
  const cities = CITIES;
  const handleCitySelect = (city: string) => dispatch(chooseCityAction(city));

  return(
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city: string) => (
              <li key ={city} className="locations__item">
                <Link className={`locations__item-link tabs__item ${city === selectedCityName ? 'tabs__item--active' : ''}`} to={AppRoute.Root} onClick={() => handleCitySelect(city)}>
                  <span>{city}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default CitiesList;
