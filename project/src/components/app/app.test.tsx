import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import {AppRoute, AuthorizationStatus} from '../../const';
import App from './app';
import {
  makeFakeActiveCard,
  makeFakeComments,
  makeFakeOffers,
  makeFakeSelectedOffer,
  makeFakeUser
} from '../../utils/mocks';

const mockStore = configureMockStore();

const mockOffers = makeFakeOffers();
const mockActiveCard = makeFakeActiveCard();
const mockUser = makeFakeUser();
const mockSelectedOffer = makeFakeSelectedOffer();
const mockComments = makeFakeComments();

const storeAuthorized = mockStore({
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
});

const storeNotAuthorized = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    user: null,
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
});

const history = createMemoryHistory();

const fakeAppAuthorized = (
  <Provider store={storeAuthorized}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

const fakeAppNotAuthorized = (
  <Provider store={storeNotAuthorized}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application routing', () => {
  it('should render Main Page when user navigates to "/"', () => {
    history.push(AppRoute.Root);

    render(fakeAppAuthorized);

    expect(screen.getByText(/to stay in/i)).toBeInTheDocument();
  });

  it('should render Login Page when unauthorized user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeAppNotAuthorized);

    expect(screen.getAllByText('Sign in')[0]).toBeInTheDocument();
    expect(screen.getByTestId('login')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
  });

  it('should redirect authorized user to Main Page when he tries to open Login Page "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeAppAuthorized);

    expect(screen.getByText(/to stay in/i)).toBeInTheDocument();
  });

  // it('should render Offer Page when user navigates to "/offer/id"', () => {
  //   history.push(`${AppRoute.Offer}/:${mockSelectedOffer.id}`);
  //
  //   render(fakeAppNotAuthorized);
  //
  //   expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  // });

  it('should redirect user to 404 Page when he tries to open fake Page "/fake"', () => {
    history.push('/fake');

    render(fakeAppAuthorized);

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });
});
