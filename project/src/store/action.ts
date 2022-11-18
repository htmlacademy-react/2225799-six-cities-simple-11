import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';

// export const chooseCityAction = createAction<{city: City}>('offers/city');
export const chooseCityAction = createAction<string>('offers/city');

// export const chooseCityAction = createAction('offers/city', (city: City) => ({payload: city}));

// export const showOffersAction = createAction('offers/list', (offers: Offers) => ({payload: offers}));

export const showOffersAction = createAction<Offer[]>('offers/list');
