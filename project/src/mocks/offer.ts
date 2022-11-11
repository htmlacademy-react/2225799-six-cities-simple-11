import {Offer} from '../types/offer';
import {AVATAR_URL, OfferType} from '../const';

export const OFFER: Offer = {
  bedrooms: 1,
  city: {
    location: {
      longitude: 4.85309666406198,
      latitude: 52.3909553943508,
      zoom: 10,
    },
    name: 'Amsterdam',
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
  goods: [
    'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'
  ],
  host: {
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    name: 'Angelina',
    isPro: true,
    id: 22,
  },
  id: 1,
  images: [
    'img/apartment-01.jpg',
    'img/apartment-02.jpg',
    'img/apartment-03.jpg',
    'img/apartment-01.jpg',
    'img/apartment-01.jpg',
  ],
  isPremium: true,
  location: {
    longitude: 4.85309666406198,
    latitude: 52.3909553943508,
    zoom: 8,
  },
  maxAdults: 1,
  previewImage: 'img/apartment-01.jpg',
  title: 'Beautiful & luxurious studio at great location',
  rating: 4.3,
  type: OfferType.ROOM,
  price: 150,
};
