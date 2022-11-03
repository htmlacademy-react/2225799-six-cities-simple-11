import {Offers} from '../types/offer';
import {AVATAR_URL, Currency} from '../const';

export const offers: Offers = [
  {
    id: 'offer1',
    location: {
      city: 'Amsterdam',
      longitude: 52.382452,
      latitude: 4.839064,
    },
    thumbImage: 'img/apartment-01.jpg',
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
    ],
    isPremium: true,
    name: 'Beautiful &amp; luxurious studio at great location',
    rating: 4.8,
    features:
      {
        entire: 'Apartment',
        bedrooms: 3,
        maxAdults: 4,
      },
    price: {
      value: 120,
      currency: Currency.EUR,
      text: 'night'
    },
    inside: [
      'Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'
    ],
    host: {
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Angelina',
      status: 'Pro',
    },
    description: [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
    ],
    reviews: [
      {
        id: 22,
        user: {
          avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
          name: 'Max',
        },
        rating: 4,
        text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
        date: 'Wed Oct 26 2022 11:30:59 GMT+0200 (Central European Summer Time)',
      }
    ],
  },
  {
    id: 'offer2',
    location: {
      city: 'Cologne',
      longitude: 50.948294,
      latitude: 6.943851,
    },
    thumbImage: 'img/apartment-02.jpg',
    images: [
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
    ],
    isPremium: true,
    name: 'Beautiful &amp; luxurious studio at great location',
    rating: 5,
    features:
      {
        entire: 'Apartment',
        bedrooms: 4,
        maxAdults: 4,
      },
    price: {
      value: 220,
      currency: Currency.GBP,
      text: 'night'
    },
    inside: [
      'Wi-Fi', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'
    ],
    host: {
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Patrick',
    },
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ],
    reviews: [
      {
        id: 2,
        user: {
          avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
          name: 'Mary',
        },
        rating: 5,
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        date: 'Wed Jan 26 2022 03:00:00 GMT+0300 (Central European Summer Time)',
      }
    ],
  },
  {
    id: 'offer3',
    location: {
      city: 'Brussels',
      longitude: 50.850528,
      latitude: 4.351544,
    },
    thumbImage: 'img/apartment-03.jpg',
    images: [
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
    ],
    isPremium: true,
    name: 'Luxurious studio at great location',
    rating: 5,
    features:
      {
        entire: 'Private place',
        bedrooms: 2,
        maxAdults: 2,
      },
    price: {
      value: 100,
      currency: Currency.EUR,
      text: 'night'
    },
    inside: [
      'Wi-Fi', 'Towels', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'
    ],
    host: {
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'Dan',
    },
    description: [
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    ],
  },
  {
    id: 'offer4',
    location: {
      city: 'Hamburg',
      longitude: 53.552700,
      latitude: 10.001267,
    },
    thumbImage: 'img/apartment-01.jpg',
    images: [
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
    ],
    isPremium: true,
    name: 'Great location',
    rating: 3.6,
    features:
      {
        entire: 'Private place',
        bedrooms: 1,
        maxAdults: 2,
      },
    price: {
      value: 130,
      currency: Currency.GBP,
      text: 'night'
    },
    inside: [
      'Wi-Fi', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'
    ],
    host: {
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: 'John',
    },
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ],
    reviews: [
      {
        id: 2,
        user: {
          avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
          name: 'Mary',
        },
        rating: 5,
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        date: 'Wed Jan 26 2022 03:00:00 GMT+0300 (Central European Summer Time)',
      }
    ],
  },
];
