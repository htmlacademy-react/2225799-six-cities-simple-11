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
import CommentsList from './comments-list';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);

const store = mockStore();

describe('Comments list component', () => {
  const history = createMemoryHistory();

  it('Should be rendered correctly', () => {
    const comments = makeFakeComments();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CommentsList comments={comments} />
        </HistoryRouter>
      </Provider>
    );

    comments.forEach((comment) => {
      expect(screen.getByText(comment.comment)).toBeInTheDocument();
    });

    comments.forEach((comment) => {
      expect(screen.getByText(comment.user.name)).toBeInTheDocument();
    });
  });
});
