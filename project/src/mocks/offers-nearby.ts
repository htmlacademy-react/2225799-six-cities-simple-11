import {Offers} from '../types/offer';
import {AVATAR_URL, OfferType} from '../const';

export const OFFERS_NEARBY: Offers = [
  {
    bedrooms: 4,
    city: {
      location: {
        longitude: 4.85309666406198,
        latitude: 52.3909553943508,
        zoom: 8,
      },
      name: 'Amsterdam',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    goods: [
      'Wi-Fi', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Patrick',
      isPro: false,
      id: 78,
    },
    id: 2,
    images: [
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
    ],
    isPremium: true,
    location: {
      longitude: 4.85309666406198,
      latitude: 52.3609553943508,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    title: 'Beautiful &amp; luxurious studio at great location',
    rating: 5,
    type: OfferType.HOUSE,
    price: 220,
  },
  {
    bedrooms: 2,
    city: {
      location: {
        longitude: 4.85309666406198,
        latitude: 52.3909553943508,
        zoom: 8,
      },
      name: 'Amsterdam',
    },
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    goods: [
      'Wi-Fi', 'Towels', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Dan',
      id: 43,
      isPro: false,
    },
    id: 3,
    images: [
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
    ],
    isPremium: true,
    location: {
      longitude: 4.929309666406198,
      latitude: 52.3909553943508,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    title: 'Luxurious studio at great location',
    rating: 4.1,
    type: OfferType.HOTEL,
    price: 100,
  },
  {
    bedrooms: 1,
    city: {
      location: {
        longitude: 4.85309666406198,
        latitude: 52.3909553943508,
        zoom: 8,
      },
      name: 'Amsterdam',
    },
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    goods: [
      'Wi-Fi', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'John',
      id: 55,
      isPro: true,
    },
    id: 4,
    images: [
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
    ],
    isPremium: true,
    location: {
      longitude: 4.939309666406198,
      latitude: 52.3809553943508,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-01.jpg',
    title: 'Great location',
    rating: 3.6,
    type: OfferType.ROOM,
    price: 130,
  },
];
