import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Offers, Offer} from '../types/offer';
import {
  loadOffersAction,
  requireAuthorization,
  setError,
  setOffersDataLoadingStatus,
  redirectToRoute,
  loadUserDataAction,
  loadOfferAction,
  setOfferDataLoadingStatus,
  loadOffersNearbyAction,
  loadCommentsAction,
  setCommentSendingStatus
} from './action';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR, AppRoute} from '../const';
import {store} from './index';
import {dropToken, saveToken} from '../services/token';
import {AuthData} from '../types/auth-data';
import {AuthInfo, UserData} from '../types/user-data';
import {Review, ReviewPostData} from '../types/review';
// import {createAPI} from '../services/api';

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(loadOffersAction(data));
    dispatch(setOffersDataLoadingStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const fetchUserDataAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<AuthInfo>(APIRoute.Login);
    dispatch(loadUserDataAction(data));
  },
);

export const fetchOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    dispatch(setOfferDataLoadingStatus(true));
    try{
      const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      dispatch(loadOfferAction(data));
      dispatch(setOfferDataLoadingStatus(false));
    } catch (error){
      dispatch(setOfferDataLoadingStatus(false));
    }
  },
);

export const fetchOffersNearbyAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNearby',
  async (id, {dispatch, extra: api}) => {
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`);
    dispatch(loadOffersNearbyAction(data));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, {dispatch, extra: api}) => {
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadCommentsAction(data));
  },
);

export const sendCommentAction = createAsyncThunk<void, ReviewPostData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/PostComment',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    dispatch(setCommentSendingStatus(true));
    try{
      const {data} = await api.post<Review[]>(`${APIRoute.Comments}/${id}`, {comment, rating});
      dispatch(loadCommentsAction(data));
      dispatch(setCommentSendingStatus(false));
    } catch{
      dispatch(setCommentSendingStatus(false));
    }
  },
);