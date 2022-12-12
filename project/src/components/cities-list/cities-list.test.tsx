import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import {createAPI} from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {Action} from 'redux';
import CitiesList from './cities-list';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);

const store = mockStore({
  OFFERS: {city: 'Paris'}
});

describe('Cities list component', () => {
  const history = createMemoryHistory();

  it('Should be rendered correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CitiesList/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
  });
});

