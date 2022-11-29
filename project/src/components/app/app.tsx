import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import useAppSelector from '../../hooks/useAppSelector';
import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import Page404 from '../../pages/404-page/404-page';
import {AppRoute, AuthorizationStatus} from '../../const';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {useEffect} from 'react';
import {store} from '../../store';
import {fetchUserDataAction} from '../../store/api-actions';

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    store.dispatch(fetchUserDataAction());
  }, [authorizationStatus]);

  if (isOffersDataLoading || authorizationStatus === AuthorizationStatus.Unknown){
    return (
      <LoadingScreen/>
    );
  }
  return(
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage/>}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<Room/>}
          />
          <Route
            path="*"
            element={<Page404 />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
