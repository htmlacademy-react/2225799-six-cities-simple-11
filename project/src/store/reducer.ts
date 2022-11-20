import {createReducer} from '@reduxjs/toolkit';
import {chooseCityAction, selectSortingTypeAction, showOffersAction} from './action';
import {Offer} from '../types/offer';

type State = {
  offers: Offer[];
  city: string;
  sortingType: string;
}

const initialState:State = {
  offers: [],
  city: 'Paris',
  sortingType: 'Popular',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(chooseCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(showOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(selectSortingTypeAction, (state, action) => {
      state.sortingType = action.payload;
    });
});

export {reducer};
