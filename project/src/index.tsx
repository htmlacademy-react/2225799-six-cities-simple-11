import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './store';
import App from './components/app/app';
import {OFFERS_NEARBY} from './mocks/offers-nearby';
import {OFFER} from './mocks/offer';
import {COMMENTS} from './mocks/reviews';

const Settings = {
  commentsNumber: COMMENTS.length,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        comments={COMMENTS}
        commentsNumber={Settings.commentsNumber}
        offer={OFFER}
        offersNearby={OFFERS_NEARBY}
      />
    </Provider>
  </React.StrictMode>,
);
