import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  placesFound: number;
}

function App({placesFound}:AppScreenProps): JSX.Element {
  return(
    <MainPage placesFound={placesFound} />
  );
}

export default App;
