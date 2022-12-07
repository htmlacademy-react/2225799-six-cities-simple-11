import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';
import {Nullable} from '../../types';

export const getOffersNearby = (state: State):Nullable<Offer[]> => state[NameSpace.SelectedOffer].offersNearby;
export const getSelectedOffer = (state: State):Nullable<Offer> => state[NameSpace.SelectedOffer].selectedOffer;
export const getOfferDataLoadingStatus = (state: State):boolean => state[NameSpace.SelectedOffer].isOfferDataLoading;
export const getComments = (state: State):Review[] => state[NameSpace.SelectedOffer].comments;
export const getCommentSendingStatus = (state: State):boolean => state[NameSpace.SelectedOffer].isCommentBeingSent;
export const getFormSendingError = (state: State):boolean => state[NameSpace.SelectedOffer].isFormSendingError;
