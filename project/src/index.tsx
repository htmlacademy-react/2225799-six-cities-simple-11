import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {OFFERS} from './mocks/offers';
import {OFFERS_NEARBY} from './mocks/offers-nearby';
import {OFFER} from './mocks/offer';
import {CITY} from './mocks/city';
import {COMMENTS} from './mocks/reviews';

const Settings = {
  PlacesFound: 50,
  commentsNumber: COMMENTS.length,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placesFound = {Settings.PlacesFound}
      offers={OFFERS}
      city={CITY}
      comments={COMMENTS}
      commentsNumber={Settings.commentsNumber}
      offer={OFFER}
      offersNearby={OFFERS_NEARBY}
    />
  </React.StrictMode>,
);
