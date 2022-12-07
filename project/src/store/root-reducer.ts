import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {offers} from './offers/offers';
import {selectedOffer} from './selected-offer/selected-offer';
import {user} from './user/user';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offers.reducer,
  [NameSpace.SelectedOffer]: selectedOffer.reducer,
  [NameSpace.User]: user.reducer,
});
