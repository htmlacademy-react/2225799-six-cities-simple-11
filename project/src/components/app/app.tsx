import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import Room from '../../pages/offer/offer';
import Page404 from '../../pages/404-page/404-page';

type AppScreenProps = {
  placesFound: number;
}

function App({placesFound}:AppScreenProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage placesFound={placesFound} />}
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
