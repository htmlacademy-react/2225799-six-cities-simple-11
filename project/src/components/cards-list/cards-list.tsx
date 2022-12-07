import Card from '../../components/card/card';
import {Offers} from '../../types/offer';

type CardsListProps = {
  offers: Offers;
  classPrefix: string;
}

function CardsList({offers, classPrefix}: CardsListProps): JSX.Element {

  return(
    <>
      {offers.map((offer) => {
        const keyValue = offer.id;

        return(
          <Card offer={offer} key ={keyValue} classPrefix={classPrefix}/>
        );
      })}
    </>
  );
}

export default CardsList;
