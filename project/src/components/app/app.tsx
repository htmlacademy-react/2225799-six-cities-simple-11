import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import useAppSelector from '../../hooks/useAppSelector';
import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import Page404 from '../../pages/page-404/page-404';
import {AppRoute, AuthorizationStatus} from '../../const';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getOffersDataLoadingStatus} from '../../store/offers/selectors';

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (isOffersDataLoading || authorizationStatus === AuthorizationStatus.Unknown){
    return (
      <LoadingScreen/>
    );
  }
  return(
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default App;
