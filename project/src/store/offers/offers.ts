import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OffersProcess} from '../../types/state';
import {fetchOffersAction,} from '../api-actions';
import {Offers, Offer, Location} from '../../types/offer';

const initialState:OffersProcess = {
  offers: [],
  offersToShow: [],
  city: 'Paris',
  sortingType: 'Popular',
  isOffersDataLoading: false,
  activeCard: undefined,
};

export const offers = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    chooseCityAction: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    showOffersAction: (state, action: PayloadAction<Offer[]>) => {
      state.offersToShow = action.payload;
    },
    selectSortingTypeAction: (state, action: PayloadAction<string>) => {
      state.sortingType = action.payload;
    },
    selectActiveCardAction: (state, action: PayloadAction<Location | undefined>) => {
      state.activeCard = action.payload;
    }
  },
  extraReducers(builder){
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action: PayloadAction<Offers>) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offers = [];
        state.isOffersDataLoading = false;
      });
  }
});

export const { chooseCityAction, showOffersAction, selectSortingTypeAction, selectActiveCardAction } = offers.actions;
