import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import {createAPI} from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {Action} from 'redux';
import HistoryRouter from '../history-route/history-route';
import {makeFakeSelectedOffer} from '../../utils/mocks';
import Card from './card';
import {CITY_LIST_CLASS_NAME} from '../../const';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);

const store = mockStore();

describe('Offer card component', () => {
  const history = createMemoryHistory();

  it('Should be rendered correctly', () => {
    const offer = makeFakeSelectedOffer();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Card offer={offer} classPrefix={CITY_LIST_CLASS_NAME} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/night/i)).toBeInTheDocument();
    expect(screen.getByText(/rating/i)).toBeInTheDocument();
    expect(screen.getByAltText(/place/i)).toBeInTheDocument();
  });

});
