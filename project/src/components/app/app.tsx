import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import Page404 from '../../pages/404-page/404-page';
import {AppRoute} from '../../const';
import {Offers, Offer} from '../../types/offer';
import {Reviews} from '../../types/review';

type AppScreenProps = {
  comments: Reviews;
  commentsNumber: number;
  offer: Offer;
  offersNearby: Offers;
}

function App({comments, commentsNumber, offer, offersNearby}:AppScreenProps): JSX.Element {
  return(
    <BrowserRouter>
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
          element={<Room comments={comments} commentsNumber={commentsNumber} offer={offer} offersNearby={offersNearby}/>}
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
