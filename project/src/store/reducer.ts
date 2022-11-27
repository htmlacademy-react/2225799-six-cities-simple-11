import {createReducer} from '@reduxjs/toolkit';
import {
  chooseCityAction,
  loadOffersAction,
  requireAuthorization,
  selectSortingTypeAction,
  setError,
  setOffersDataLoadingStatus,
  showOffersAction,
  loadUserDataAction
} from './action';
import {Offers} from '../types/offer';
import {AuthInfo} from '../types/user-data';
import {AuthorizationStatus} from '../const';

type State = {
  offers: Offers;
  offersToShow: Offers;
  city: string;
  sortingType: string;
  error: string | null;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: AuthInfo | null;
}

const initialState:State = {
  offers: [],
  offersToShow: [],
  city: 'Paris',
  sortingType: 'Popular',
  error: null,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadUserDataAction, (state, action) => {
      state.user = action.payload;
    });
});

export {reducer};
