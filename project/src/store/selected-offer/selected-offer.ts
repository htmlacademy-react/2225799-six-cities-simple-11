import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {SelectedOfferProcess} from '../../types/state';
import {fetchCommentsAction, fetchOfferAction, fetchOffersNearbyAction, sendCommentAction} from '../api-actions';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';

const initialState: SelectedOfferProcess = {
  offersNearby: [],
  isOfferDataLoading: false,
  selectedOffer: null,
  comments: [],
  isCommentBeingSent: false,
  isFormSendingError: false,
};

export const selectedOffer = createSlice({
  name: NameSpace.SelectedOffer,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action: PayloadAction<Offer>) => {
        state.isOfferDataLoading = false;
        state.selectedOffer = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOfferDataLoading = false;
        state.selectedOffer = null;
        state.comments = [];
        state.offersNearby = [];
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action: PayloadAction<Offer[]>) => {
        state.offersNearby = action.payload;
      })
      .addCase(fetchOffersNearbyAction.rejected, (state) => {
        state.offersNearby = [];
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action: PayloadAction<Review[]>) => {
        state.comments = action.payload;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.comments = [];
      })
      .addCase(sendCommentAction.pending, (state) => {
        state.isCommentBeingSent = true;
      })
      .addCase(sendCommentAction.fulfilled, (state, action: PayloadAction<Review[]>) => {
        state.isCommentBeingSent = false;
        state.comments = action.payload;
        state.isFormSendingError = false;
      })
      .addCase(sendCommentAction.rejected, (state) => {
        state.isCommentBeingSent = false;
        state.isFormSendingError = true;
      });
  }
});
