import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {UserData} from './user-data';
import {Nullable} from './index';
import {Offer, Offers} from './offer';
import {Review} from './review';
import {Location} from './offer';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
}

export type SelectedOfferProcess = {
  selectedOffer: Nullable<Offer>;
  isOfferDataLoading: boolean;
  comments: Review[];
  isCommentBeingSent: boolean;
  offersNearby: Offers;
  isFormSendingError: boolean;
}

export type OffersProcess = {
  offers: Offers;
  offersToShow: Offers;
  city: string;
  sortingType: string;
  isOffersDataLoading: boolean;
  activeCard: Location | undefined;
}
