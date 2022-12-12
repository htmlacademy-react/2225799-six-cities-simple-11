import {chooseCityAction, offers, selectActiveCardAction, selectSortingTypeAction, showOffersAction} from './offers';
import {OffersProcess} from '../../types/state';
import {makeFakeActiveCard, makeFakeCity, makeFakeOffers, makeFakeSortingType} from '../../utils/mocks';
import {fetchOffersAction} from '../api-actions';

const offersReducer = offers;

const initialState:OffersProcess = {
  offers: [],
  offersToShow: [],
  city: 'Paris',
  sortingType: 'Popular',
  isOffersDataLoading: false,
  activeCard: undefined,
};

describe('Reducer: offers', () => {
  it('without additional parameters should return initial state', () => {
    expect(offersReducer.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({...initialState});
  });

  it('should choose city', () => {
    const state = {...initialState};
    const city = makeFakeCity();
    expect(offersReducer.reducer(state, chooseCityAction(city)))
      .toEqual({...initialState, city: city});
  });

  it('should show offers', () => {
    const state = {...initialState};
    const offersToShow = makeFakeOffers();
    expect(offersReducer.reducer(state, showOffersAction(offersToShow)))
      .toEqual({...initialState, offersToShow: offersToShow});
  });

  it('should select sorting type', () => {
    const state = {...initialState};
    const sortingType = makeFakeSortingType();
    expect(offersReducer.reducer(state, selectSortingTypeAction(sortingType)))
      .toEqual({...initialState, sortingType: sortingType});
  });

  it('should select active offer card', () => {
    const state = {...initialState};
    const activeCard = makeFakeActiveCard();
    expect(offersReducer.reducer(state, selectActiveCardAction(activeCard)))
      .toEqual({...initialState, activeCard: activeCard});
  });

  it('should be loading while offers are being fetched', () => {
    const state = {...initialState};
    expect(offersReducer.reducer(state, {type: fetchOffersAction.pending.type}))
      .toEqual({...initialState, isOffersDataLoading: true});
  });

  it('should load offers', () => {
    const state = {...initialState};
    const offersLoaded = makeFakeOffers();
    expect(offersReducer.reducer(state, {type: fetchOffersAction.fulfilled.type, payload: offersLoaded}))
      .toEqual({...initialState, offers: offersLoaded, isOffersDataLoading: false});
  });

  it('should not change offers if fetchOffersAction rejected', () => {
    const state = {...initialState};
    expect(offersReducer.reducer(state, {type: fetchOffersAction.rejected.type}))
      .toEqual({...initialState, isOffersDataLoading: false});
  });
});
