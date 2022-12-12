import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import {createAPI} from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {Action} from 'redux';
import HistoryRouter from '../../components/history-route/history-route';
import {AuthorizationStatus} from '../../const';
import {HelmetProvider} from 'react-helmet-async';
import Login from './login';
import userEvent from '@testing-library/user-event';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);
const store = mockStore(
  {
    USER: {
      authorizationStatus: AuthorizationStatus.NoAuth,
    },
  },
);

describe('Login page component', () => {
  const history = createMemoryHistory();

  it('should render Login page when user navigates to "login" url', async () => {
    history.push('/login');
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Login/>
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getAllByText('Sign in')[0]).toBeInTheDocument();
    expect(screen.getByTestId('login')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('login'), 'tanyakomb@gmail.com');
    await userEvent.type(screen.getByTestId('password'), '1q');

    expect(screen.getByDisplayValue(/tanyakomb@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/1q/i)).toBeInTheDocument();
  });
});
