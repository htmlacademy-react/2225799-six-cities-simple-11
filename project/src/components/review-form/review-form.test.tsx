import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import {createAPI} from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {Action} from 'redux';
import HistoryRouter from '../history-route/history-route';
import {makeFakeComments, makeFakeOffers, makeFakeSelectedOffer} from '../../utils/mocks';
import ReviewForm from './review-form';
import {AuthorizationStatus} from '../../const';
import userEvent from '@testing-library/user-event';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);
const mockSelectedOffer = makeFakeSelectedOffer();
const mockOffersNearby = makeFakeOffers();
const mockComments = makeFakeComments();
const store = mockStore(
  {
    USER: {
      authorizationStatus: AuthorizationStatus.Auth,
    },
    SELECTED_OFFER: {
      offersNearby: mockOffersNearby,
      isOfferDataLoading: false,
      selectedOffer: mockSelectedOffer,
      comments: mockComments,
      isCommentBeingSent: false,
      isFormSendingError: false,
    }
  },
);

describe('Review form component', () => {
  const history = createMemoryHistory();

  it('Should be rendered correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewForm id={13}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
  });

  it('Should not let post comment until rating and text are valid', async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewForm id={13}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('submit')).toBeDisabled();
    await userEvent.click(screen.getByTestId('1-stars'));
    expect(screen.getByTestId('submit')).toBeDisabled();
    await userEvent.type(screen.getByTestId('review'), mockComments[0].comment);
    expect(screen.getByTestId('submit')).toBeEnabled();
  });

  it('submit button should be disabled while comment is being sent', () => {
    const storeAdditional = mockStore(
      {
        USER: {
          authorizationStatus: AuthorizationStatus.Auth,
        },
        SELECTED_OFFER: {
          offersNearby: mockOffersNearby,
          isOfferDataLoading: false,
          selectedOffer: mockSelectedOffer,
          comments: mockComments,
          isCommentBeingSent: true,
          isFormSendingError: false,
        }
      },
    );

    render(
      <Provider store={storeAdditional}>
        <HistoryRouter history={history}>
          <ReviewForm id={13}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('submit')).toBeDisabled();
    expect(screen.getByText(/Sending/i)).toBeInTheDocument();
  });
});
