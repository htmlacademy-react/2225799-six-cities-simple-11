import { helpers } from 'faker';
import {Location, Offer} from '../types/offer';
import {Review, ReviewPostData} from '../types/review';
import {UserData} from '../types/user-data';

const CITY_1 = 'Cologne';
const CITY_2 = 'Brussels';

const OFFER_1:Offer = {
  city: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  previewImage: 'https://11.react.pages.academy/static/hotel/1.jpg',
  images: [
    'https://11.react.pages.academy/static/hotel/13.jpg',
    'https://11.react.pages.academy/static/hotel/14.jpg',
    'https://11.react.pages.academy/static/hotel/19.jpg',
    'https://11.react.pages.academy/static/hotel/5.jpg',
    'https://11.react.pages.academy/static/hotel/11.jpg',
    'https://11.react.pages.academy/static/hotel/1.jpg',
    'https://11.react.pages.academy/static/hotel/3.jpg',
    'https://11.react.pages.academy/static/hotel/2.jpg',
    'https://11.react.pages.academy/static/hotel/20.jpg',
    'https://11.react.pages.academy/static/hotel/8.jpg',
    'https://11.react.pages.academy/static/hotel/4.jpg',
    'https://11.react.pages.academy/static/hotel/15.jpg',
    'https://11.react.pages.academy/static/hotel/10.jpg',
    'https://11.react.pages.academy/static/hotel/16.jpg',
  ],
  title: 'Loft Studio in the Central Area',
  isPremium: true,
  rating: 4.4,
  type: 'house',
  bedrooms: 5,
  maxAdults: 7,
  price: 543,
  goods: [
    'Towels',
    'Breakfast',
    'Laptop friendly workspace',
    'Air conditioning',
    'Washer',
    'Baby seat',
  ],
  host: {
    id: 25,
    name: 'Angelina',
    isPro: true,
    avatarUrl: 'img/avatar-angelina.jpg',
  },
  description:
    'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
  location: {
    latitude: 50.954361,
    longitude: 6.982974,
    zoom: 16,
  },
  id: 1,
};

const OFFER_2:Offer = {
  city: {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  previewImage: 'https://11.react.pages.academy/static/hotel/20.jpg',
  images: [
    'https://11.react.pages.academy/static/hotel/5.jpg',
    'https://11.react.pages.academy/static/hotel/8.jpg',
    'https://11.react.pages.academy/static/hotel/3.jpg',
    'https://11.react.pages.academy/static/hotel/4.jpg',
    'https://11.react.pages.academy/static/hotel/15.jpg',
    'https://11.react.pages.academy/static/hotel/11.jpg',
    'https://11.react.pages.academy/static/hotel/13.jpg',
    'https://11.react.pages.academy/static/hotel/19.jpg',
    'https://11.react.pages.academy/static/hotel/1.jpg',
    'https://11.react.pages.academy/static/hotel/16.jpg',
    'https://11.react.pages.academy/static/hotel/14.jpg',
    'https://11.react.pages.academy/static/hotel/18.jpg',
    'https://11.react.pages.academy/static/hotel/2.jpg',
    'https://11.react.pages.academy/static/hotel/10.jpg',
  ],
  title: 'Penthouse, 4-5 rooms + 5 balconies',
  isPremium: false,
  rating: 2.2,
  type: 'house',
  bedrooms: 2,
  maxAdults: 4,
  price: 870,
  goods: [
    'Coffee machine',
    'Cable TV',
    'Breakfast',
    'Washing machine',
    'Towels',
    'Washer',
    'Dishwasher',
    'Baby seat',
    'Fridge',
    'Laptop friendly workspace',
    'Air conditioning',
  ],
  host: {
    id: 25,
    name: 'Angelina',
    isPro: true,
    avatarUrl: 'img/avatar-angelina.jpg',
  },
  description:
    'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
  location: {
    latitude: 50.833557,
    longitude: 4.374696999999999,
    zoom: 16,
  },
  id: 2,
};

const OFFER_3:Offer = {
  city: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
  previewImage: 'https://11.react.pages.academy/static/hotel/17.jpg',
  images: [
    'https://11.react.pages.academy/static/hotel/13.jpg',
    'https://11.react.pages.academy/static/hotel/1.jpg',
    'https://11.react.pages.academy/static/hotel/19.jpg',
    'https://11.react.pages.academy/static/hotel/7.jpg',
    'https://11.react.pages.academy/static/hotel/5.jpg',
    'https://11.react.pages.academy/static/hotel/2.jpg',
    'https://11.react.pages.academy/static/hotel/17.jpg',
    'https://11.react.pages.academy/static/hotel/11.jpg',
    'https://11.react.pages.academy/static/hotel/10.jpg',
    'https://11.react.pages.academy/static/hotel/4.jpg',
    'https://11.react.pages.academy/static/hotel/16.jpg',
    'https://11.react.pages.academy/static/hotel/12.jpg',
    'https://11.react.pages.academy/static/hotel/8.jpg',
    'https://11.react.pages.academy/static/hotel/3.jpg',
  ],
  title: 'The house among olive ',
  isPremium: false,
  rating: 3.5,
  type: 'apartment',
  bedrooms: 3,
  maxAdults: 7,
  price: 360,
  goods: [
    'Washer',
    'Laptop friendly workspace',
    'Air conditioning',
    'Baby seat',
    'Breakfast',
  ],
  host: {
    id: 25,
    name: 'Angelina',
    isPro: true,
    avatarUrl: 'img/avatar-angelina.jpg',
  },
  description:
    'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
  location: {
    latitude: 51.236402000000005,
    longitude: 6.784314,
    zoom: 16,
  },
  id: 3,
};

const SORTING_TYPE_1 = 'High to low';
const SORTING_TYPE_2 = 'Low to high';

const ACTIVE_CARD_1:Location = {
  latitude: 48.837610000000005,
  longitude: 2.364499,
  zoom: 16,
};

const ACTIVE_CARD_2:Location = {
  latitude: 50.938361,
  longitude: 6.959974,
  zoom: 13,
};

const COMMENT_1: Review = {
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: 'Thu Nov 10 2022 07:37:51 GMT+0300 (Москва, стандартное время)',
  id: 1,
  rating: 4,
  user: {
    avatarUrl: 'https://11.react.pages.academy/static/hotel/4.jpg',
    id: 1,
    isPro: false,
    name: 'Oliver.conner'
  }
};

const COMMENT_2: Review = {
  comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  date: 'Thu Nov 10 2022 17:37:51 GMT+0300 (Москва, стандартное время)',
  id: 2,
  rating: 5,
  user: {
    avatarUrl: 'https://11.react.pages.academy/static/hotel/5.jpg',
    id: 11,
    isPro: true,
    name: 'Mary'
  }
};

const COMMENT_3: Review = {
  comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  date: 'Thu Nov 10 2022 21:37:51 GMT+0300 (Москва, стандартное время)',
  id: 3,
  rating: 4,
  user: {
    avatarUrl: 'https://11.react.pages.academy/static/hotel/1.jpg',
    id: 13,
    isPro: false,
    name: 'Sam'
  }
};

const USER_1: UserData = {
  avatarUrl: 'img/avatar-angelina.jpg',
  email: 'uytut@jkhkj7.com',
  id: 22,
  isPro: true,
  name: 'Ann',
  token: 'secret',
};

const USER_2: UserData = {
  avatarUrl: 'img/avatar-angelina.jpg',
  email: 'uytut@jkhksggdj7.com',
  id: 21,
  isPro: false,
  name: 'Mary',
  token: 'secret',
};

const NEW_COMMENT: ReviewPostData = {
  id: 13,
  comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  rating: 4,
};

export const makeFakeCity = ():string => helpers.randomize<string>([CITY_1, CITY_2]);
export const makeFakeOffers = ():Offer[] => [OFFER_1, OFFER_2, OFFER_3];
export const makeFakeSelectedOffer = ():Offer => helpers.randomize<Offer>([OFFER_1, OFFER_2, OFFER_3]);
export const makeFakeSortingType = ():string => helpers.randomize<string>([SORTING_TYPE_1, SORTING_TYPE_2]);
export const makeFakeActiveCard = ():Location => helpers.randomize<Location>([ACTIVE_CARD_1, ACTIVE_CARD_2]);
export const makeFakeComments = ():Review[] => [COMMENT_1, COMMENT_2, COMMENT_3];
export const makeFakeComment = ():ReviewPostData => NEW_COMMENT;
export const makeFakeUser = ():UserData => helpers.randomize<UserData>([USER_1, USER_2]);
