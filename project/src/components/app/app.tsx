import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import Room from '../../pages/offer/offer';
import Page404 from '../../pages/404-page/404-page';
import {Offers, City} from '../../types/offer';

type AppScreenProps = {
  placesFound: number;
  offers: Offers;
  city: City;
}

function App({placesFound, offers, city}:AppScreenProps): JSX.Element {


  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage placesFound={placesFound} offers={offers} city={city} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<Room />}
        />
        <Route
          path="*"
          element={<Page404 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
