import {createReducer} from '@reduxjs/toolkit';
import {chooseCityAction, showOffersAction} from './action';
import {Offer} from '../types/offer';

type State = {
  offers: Offer[];
  city: string;
  // onMouseCardEnter?: (offer: Offer) => void;
  // onMouseCardLeave?: () => void;
  // classPrefix: string;
}

const initialState:State = {
  offers: [],
  city: 'Paris',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(chooseCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(showOffersAction, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
