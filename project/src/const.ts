export enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer',
}

export const CURRENCY = '€';

export const URL_MARKER_DEFAULT =
  'img/pin.svg';

export const URL_MARKER_CURRENT =
  'img/pin-active.svg';

export const ICON_SIZE = 40;

export const HOST_AVATAR_SIZE = 74;

export const MAP_HEIGHT = 579;

export const CITY_LIST_CLASS_NAME = 'cities';

export const NEAR_PLACES_LIST_CLASS_NAME = 'near-places';

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum SortingTypeName {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Nearby = '/nearby',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  SelectedOffer = 'SELECTED_OFFER',
  Offers = 'OFFERS',
  User = 'USER',
}

export enum StarRate {
  OneStar = 1,
  TwoStars = 2,
  ThreeStars = 3,
  FourStars = 4,
  FiveStars = 5,
}
