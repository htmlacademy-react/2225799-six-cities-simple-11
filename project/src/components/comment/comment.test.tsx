import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import {createAPI} from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {Action} from 'redux';
import HistoryRouter from '../history-route/history-route';
import {makeFakeComments} from '../../utils/mocks';
import Comment from './comment';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);

const store = mockStore();

describe('Comment component', () => {
  const history = createMemoryHistory();

  it('Should be rendered correctly', () => {
    const comment = makeFakeComments()[0];

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Comment comment={comment} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(comment.comment)).toBeInTheDocument();
    expect(screen.getByText(comment.user.name)).toBeInTheDocument();
  });

});
