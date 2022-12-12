import {createAPI} from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {State} from '../types/state';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from 'redux';
import {makeFakeComment, makeFakeComments, makeFakeOffers, makeFakeSelectedOffer, makeFakeUser} from '../utils/mocks';
import {APIRoute} from '../const';
import {
  checkAuthAction,
  fetchOfferAction,
  fetchOffersAction,
  fetchOffersNearbyAction,
  loginAction,
  logoutAction, sendCommentAction
} from './api-actions';
import {AuthData} from '../types/auth-data';
import {redirectToRoute} from './action';
import {AUTH_TOKEN_KEY_NAME} from '../services/token';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should return offers data when GET /hotels', async () => {
    const mockOffers = makeFakeOffers();

    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, mockOffers);

    const store = mockStore();

    const loadedData = await store.dispatch(fetchOffersAction());

    expect(loadedData.payload).toEqual(mockOffers);

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      fetchOffersAction.fulfilled.type
    ]);
  });

  it('should return user data when authorization is successful', async () => {
    const mockUser = makeFakeUser();
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, mockUser);

    expect(store.getActions()).toEqual([]);

    const loadedData = await store.dispatch(checkAuthAction());

    expect(loadedData.payload).toEqual(mockUser);

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should save token and redirect to main page when POST /login', async () => {
    const mockAuthData: AuthData = {login: 'test@test.ru', password: '123456'};
    const store = mockStore();

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: 'secret'});

    expect(store.getActions()).toEqual([]);

    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(mockAuthData)) ;

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      redirectToRoute.type,
      loginAction.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME, 'secret');
  });

  it('should dispatch Logout and remove token when /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      logoutAction.fulfilled.type
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME);
  });

  it('should return selected offer data when GET /hotels/id', async () => {
    const mockOffer = makeFakeSelectedOffer();

    mockAPI
      .onGet(`${APIRoute.Offers}/${mockOffer.id}`)
      .reply(200, mockOffer);

    const store = mockStore();

    const loadedData = await store.dispatch(fetchOfferAction(mockOffer.id));

    expect(loadedData.payload).toEqual(mockOffer);

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOfferAction.pending.type,
      fetchOfferAction.fulfilled.type
    ]);
  });

  it('should return offers near selected offer when GET /hotels/id/nearby', async () => {
    const mockOffersNearby = makeFakeOffers();
    const mockOffer = makeFakeSelectedOffer();

    mockAPI
      .onGet(`${APIRoute.Offers}/${mockOffer.id}${APIRoute.Nearby}`)
      .reply(200, mockOffersNearby);

    const store = mockStore();

    const loadedData = await store.dispatch(fetchOffersNearbyAction(mockOffer.id));

    expect(loadedData.payload).toEqual(mockOffersNearby);

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOffersNearbyAction.pending.type,
      fetchOffersNearbyAction.fulfilled.type
    ]);
  });

  it('should post new comment and update comments on selected offer when POST /comments/id', async () => {
    const mockOfferComments = makeFakeComments();
    const mockOffer = makeFakeSelectedOffer();
    const mockNewComment = makeFakeComment();
    const {comment, rating} = mockNewComment;
    const {id} = mockOffer;

    mockAPI
      .onPost(`${APIRoute.Comments}/${id}`, {comment, rating})
      .reply(200, mockOfferComments);

    const store = mockStore();

    const loadedData = await store.dispatch(sendCommentAction({id, comment, rating}));

    expect(loadedData.payload).toEqual(mockOfferComments);

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      sendCommentAction.pending.type,
      sendCommentAction.fulfilled.type
    ]);
  });
});
