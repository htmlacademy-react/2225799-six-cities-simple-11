import {Reviews} from '../types/review';
import {AVATAR_URL} from '../const';

export const COMMENTS: Reviews = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Thu Nov 10 2022 07:37:51 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: AVATAR_URL,
      id: 1,
      isPro: false,
      name: 'Oliver.conner'
    }
  },
  {
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Thu Nov 10 2022 17:37:51 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 5,
    user: {
      avatarUrl: AVATAR_URL,
      id: 11,
      isPro: true,
      name: 'Mary'
    }
  },
  {
    comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'Thu Nov 10 2022 21:37:51 GMT+0300 (Москва, стандартное время)',
    id: 3,
    rating: 4,
    user: {
      avatarUrl: AVATAR_URL,
      id: 13,
      isPro: false,
      name: 'Sam'
    }
  }
];
