import {SelectedOfferProcess} from '../../types/state';
import {selectedOffer} from './selected-offer';
import {
  fetchCommentsAction,
  fetchOfferAction,
  fetchOffersNearbyAction,
  sendCommentAction
} from '../api-actions';
import {makeFakeComments, makeFakeOffers, makeFakeSelectedOffer} from '../../utils/mocks';

const selectedOfferReducer = selectedOffer;

const initialState: SelectedOfferProcess = {
  offersNearby: [],
  isOfferDataLoading: false,
  selectedOffer: null,
  comments: [],
  isCommentBeingSent: false,
  isFormSendingError: false,
};

describe('Reducer: selectedOffer', () => {
  it('without additional parameters should return initial state', () => {
    expect(selectedOfferReducer.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({...initialState});
  });

  it('should show loading status while selected offer data is being loaded', () => {
    const state = {...initialState};
    expect(selectedOfferReducer.reducer(state, {type: fetchOfferAction.pending.type}))
      .toEqual({...initialState, isOfferDataLoading: true});
  });

  it('should load selected offer data', () => {
    const state = {...initialState};
    const chosenOffer = makeFakeSelectedOffer();
    expect(selectedOfferReducer.reducer(state, {type: fetchOfferAction.fulfilled.type, payload: chosenOffer}))
      .toEqual({...initialState, selectedOffer: chosenOffer, isOfferDataLoading: false});
  });

  it('should reset selected offer data if fetchOfferAction rejected', () => {
    const state = {...initialState};
    expect(selectedOfferReducer.reducer(state, {type: fetchOfferAction.rejected.type}))
      .toEqual({...initialState, isOfferDataLoading: false, selectedOffer: null, comments: [], offersNearby: []});
  });

  it('should load nearby offers data', () => {
    const state = {...initialState};
    const offersNearby = makeFakeOffers();
    expect(selectedOfferReducer.reducer(state, {type: fetchOffersNearbyAction.fulfilled.type, payload: offersNearby}))
      .toEqual({...initialState, offersNearby: offersNearby});
  });

  it('should reset nearby offers data if fetchOffersNearbyAction rejected', () => {
    const state = {...initialState};
    expect(selectedOfferReducer.reducer(state, {type: fetchOffersNearbyAction.rejected.type}))
      .toEqual({...initialState, offersNearby: []});
  });

  it('should reset comments data if fetchCommentsAction rejected', () => {
    const state = {...initialState};
    expect(selectedOfferReducer.reducer(state, {type: fetchCommentsAction.rejected.type}))
      .toEqual({...initialState, comments: []});
  });

  it('should load comments', () => {
    const state = {...initialState};
    const comments = makeFakeComments();
    expect(selectedOfferReducer.reducer(state, {type: fetchCommentsAction.fulfilled.type, payload: comments}))
      .toEqual({...initialState, comments: comments});
  });

  it('should show loading status while new comment is being posted', () => {
    const state = {...initialState};
    expect(selectedOfferReducer.reducer(state, {type: sendCommentAction.pending.type}))
      .toEqual({...initialState, isCommentBeingSent: true});
  });

  it('should update comments after posting the new one', () => {
    const state = {...initialState};
    const comments = makeFakeComments();
    expect(selectedOfferReducer.reducer(state, {type: sendCommentAction.fulfilled.type, payload: comments}))
      .toEqual({...initialState, comments: comments, isCommentBeingSent: false, isFormSendingError: false});
  });

  it('should remove loader and show error', () => {
    const state = {...initialState};
    expect(selectedOfferReducer.reducer(state, {type: sendCommentAction.rejected.type}))
      .toEqual({...initialState, isCommentBeingSent: false, isFormSendingError: true});
  });

});
