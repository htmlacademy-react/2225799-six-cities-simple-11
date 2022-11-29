import {createReducer} from '@reduxjs/toolkit';
import {
  chooseCityAction,
  loadOffersAction,
  requireAuthorization,
  selectSortingTypeAction,
  setError,
  setOffersDataLoadingStatus,
  showOffersAction,
  loadUserDataAction,
  loadOfferAction,
  setOfferDataLoadingStatus,
  loadOffersNearbyAction,
  loadCommentsAction,
  setCommentSendingStatus,
} from './action';
import {Offers, Offer} from '../types/offer';
import {AuthInfo} from '../types/user-data';
import {AuthorizationStatus} from '../const';
import {Nullable} from '../types';
import {Review} from '../types/review';

type State = {
  offers: Offers;
  offersNearby: Offers;
  offersToShow: Offers;
  selectedOffer: Nullable<Offer>;
  city: string;
  sortingType: string;
  error: string | null;
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: AuthInfo | null;
  comments: Review[];
  isCommentBeingSent: boolean;
}

const initialState:State = {
  offers: [],
  offersNearby: [],
  offersToShow: [],
  city: 'Paris',
  sortingType: 'Popular',
  error: null,
  isOffersDataLoading: false,
  isOfferDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  selectedOffer: null,
  comments: [],
  isCommentBeingSent: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(chooseCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(showOffersAction, (state, action) => {
      state.offersToShow = action.payload;
    })
    .addCase(selectSortingTypeAction, (state, action) => {
      state.sortingType = action.payload;
    })
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadUserDataAction, (state, action) => {
      state.user = action.payload;
    })
    .addCase(loadOfferAction, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(loadOffersNearbyAction, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(loadCommentsAction, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setCommentSendingStatus, (state, action) => {
      state.isCommentBeingSent = action.payload;
    });
});

export {reducer};
