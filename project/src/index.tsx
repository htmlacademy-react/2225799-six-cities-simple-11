import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {OFFERS} from './mocks/offers';
import {CITY} from './mocks/city';

const Settings = {
  PlacesFound: 50,
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
    />
  </React.StrictMode>,
);
