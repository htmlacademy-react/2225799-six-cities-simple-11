export type Features = {
  entire: string;
  bedrooms: number;
  maxAdults: number;
};

export type Price = {
  value: number;
  currency: string;
  text: string;
};

export type User = {
  avatar: string;
  name: string;
  pro?: boolean;
};

export type Review = {
  id: string | number;
  user: User;
  rating: number;
  text: string;
  date: string;
};

export type Location = {
  title: string;
  longitude: number;
  latitude: number;
  zoom?: number;
};

export type Offer = {
  id: string | number;
  location: Location;
  thumbImage: string;
  images: string[];
  isPremium: boolean;
  name: string;
  rating: number;
  features: Features;
  price: Price;
  inside: string[];
  host: User;
  description: string[];
  reviews?: Review[];
};

export type Offers = Offer[];
