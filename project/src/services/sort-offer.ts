import {SortingTypeName} from '../const';
import {Offer} from '../types/offer';
type OffersSorterOutput = (a:Offer, b:Offer) => number;

const sortOffers = (sortingType: string):OffersSorterOutput | undefined => {
  switch (sortingType){
    case SortingTypeName.PriceLowToHigh: return (a: Offer, b: Offer):number => a.price - b.price;
    case SortingTypeName.PriceHighToLow: return (a: Offer, b: Offer):number => b.price - a.price;
    case SortingTypeName.TopRatedFirst: return (a: Offer, b: Offer):number => b.rating - a.rating;
  }
};

export default sortOffers;
