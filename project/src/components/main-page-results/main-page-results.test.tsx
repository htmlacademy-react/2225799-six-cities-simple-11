import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import {createAPI} from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {Action} from 'redux';
import HistoryRouter from '../history-route/history-route';
import {makeFakeCity, makeFakeOffers} from '../../utils/mocks';
import MainPageResults from './main-page-results';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);
const mockOffers = makeFakeOffers();
const mockCity = makeFakeCity();
const store = mockStore(
  {
    OFFERS: {
      offers: mockOffers,
      offersToShow: mockOffers,
      city: mockCity,
    }
  },
);

describe('Main page results component', () => {
  const history = createMemoryHistory();

  it('Should be rendered correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainPageResults/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/to stay in/i)).toBeInTheDocument();
    expect(screen.getByText(/sort by/i)).toBeInTheDocument();
  });

});
