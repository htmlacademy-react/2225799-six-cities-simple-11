import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import useAppSelector from '../../hooks/useAppSelector';

type CitiesListProps = {
  cities: string[];
  onCityClick: (cityName: string) => void;
}

function CitiesList({cities, onCityClick}: CitiesListProps): JSX.Element {

  const selectedCityName = useAppSelector((state) => state.city);

  return(
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city: string) => (
              <li key ={city} className="locations__item">
                <Link className={`locations__item-link tabs__item ${city === selectedCityName ? 'tabs__item--active' : ''}`} to={AppRoute.Root} onClick={() => onCityClick(city)}>
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
