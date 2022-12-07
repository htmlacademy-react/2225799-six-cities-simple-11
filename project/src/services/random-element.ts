const randomElement = (arr:string[]):string => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

export default randomElement;
