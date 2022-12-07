import {useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import cn from 'classnames';
import {showOffersAction} from '../../store/offers/offers';
import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import sortOffers from '../../services/sort-offer';
import {store} from '../../store';
import {fetchOffersAction} from '../../store/api-actions';
import {getCity, getOffers, getOffersToShow, getSortingType} from '../../store/offers/selectors';
import MainPageResults from '../../components/main-page-results/main-page-results';
import MainPageNoResults from '../../components/main-page-no-results/main-page-no-results';

store.dispatch(fetchOffersAction());

function MainPage(): JSX.Element {

  const dispatch = useAppDispatch();
  const offers = useAppSelector(getOffers);
  const selectedCityName = useAppSelector(getCity);
  const selectedCityOffers = useAppSelector(getOffersToShow);
  const selectedSortingOption = useAppSelector(getSortingType);

  const offersFiltered = offers.filter((offer) => offer.city.name === selectedCityName).sort(sortOffers(selectedSortingOption));

  useEffect(() => {
    dispatch(showOffersAction(offersFiltered));
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
          <CitiesList/>
          <div className="cities">
            {selectedCityOffers.length ? <MainPageResults/> : <MainPageNoResults/>}
          </div>
        </main>
      </div>
    </>
  );
}

export default MainPage;
