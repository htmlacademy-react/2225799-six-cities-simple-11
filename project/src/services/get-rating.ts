const getRating = (rating: number):string => {

  const ratingWidth = ((Math.round(rating ) / 5) * 100).toString().concat('%');

  return ratingWidth;
};

export default getRating;
