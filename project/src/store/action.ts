import {createAction} from '@reduxjs/toolkit';
import {Offer, Offers} from '../types/offer';
import {AuthorizationStatus, AppRoute} from '../const';
import {AuthInfo} from '../types/user-data';
import {Review} from '../types/review';

export const chooseCityAction = createAction<string>('offers/city');

export const loadOfferAction = createAction<Offer | null>('offers/offer');

export const loadOffersNearbyAction = createAction<Offer[]>('offers/offersNearby');

export const showOffersAction = createAction<Offer[]>('offers/list');

export const selectSortingTypeAction = createAction<string>('offers/sort');

export const loadOffersAction = createAction<Offers>('data/loadOffers');

export const setError = createAction<string | null>('offers/setError');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setOfferDataLoadingStatus = createAction<boolean>('data/setOfferDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');

export const loadUserDataAction = createAction<AuthInfo | null>('data/loadUser');

export const loadCommentsAction = createAction<Review[]>('data/loadComments');

export const setCommentSendingStatus = createAction<boolean>('data/setCommentSendingStatus');

