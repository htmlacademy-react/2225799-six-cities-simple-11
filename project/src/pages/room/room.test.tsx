import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import {createAPI} from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {Action} from 'redux';
import HistoryRouter from '../../components/history-route/history-route';
import {
  makeFakeActiveCard,
  makeFakeComments,
  makeFakeOffers,
  makeFakeSelectedOffer,
  makeFakeUser
} from '../../utils/mocks';
import Room from './room';
import {AuthorizationStatus} from '../../const';
import {HelmetProvider} from 'react-helmet-async';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
  >(middlewares);
const mockOffers = makeFakeOffers();
const mockSelectedOffer = makeFakeSelectedOffer();
const mockComments = makeFakeComments();
const mockUser = makeFakeUser();
const mockActiveCard = makeFakeActiveCard();
const store = mockStore(
  {
    USER: {
      authorizationStatus: AuthorizationStatus.Auth,
      user: mockUser,
    },
    OFFERS: {
      offers: mockOffers,
      offersToShow: mockOffers,
      city: 'Paris',
      sortingType: 'Popular',
      isOffersDataLoading: false,
      activeCard: mockActiveCard,
    },
    SELECTED_OFFER: {
      offersNearby: mockOffers,
      isOfferDataLoading: false,
      selectedOffer: mockSelectedOffer,
      comments: mockComments,
      isCommentBeingSent: false,
      isFormSendingError: false,
    }
  },
);

describe('Room page component', () => {
  const history = createMemoryHistory();

  it('Should be rendered correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Room/>
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

});
