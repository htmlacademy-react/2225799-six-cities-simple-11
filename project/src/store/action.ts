import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';

export const chooseCityAction = createAction<string>('offers/city');

export const showOffersAction = createAction<Offer[]>('offers/list');

export const selectSortingTypeAction = createAction<string>('offers/sort');
