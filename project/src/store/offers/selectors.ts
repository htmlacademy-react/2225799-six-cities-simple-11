import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offer, Location} from '../../types/offer';

export const getOffers = (state: State):Offer[] => state[NameSpace.Offers].offers;
export const getOffersToShow = (state: State):Offer[] => state[NameSpace.Offers].offersToShow;
export const getCity = (state: State):string => state[NameSpace.Offers].city;
export const getSortingType = (state: State):string => state[NameSpace.Offers].sortingType;
export const getOffersDataLoadingStatus = (state: State):boolean => state[NameSpace.Offers].isOffersDataLoading;
export const getActiveCard = (state: State):Location | undefined => state[NameSpace.Offers].activeCard;
