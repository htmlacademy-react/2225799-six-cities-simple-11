import Card from '../../components/card/card';
import {Offers, Offer} from '../../types/offer';

type CardsListProps = {
  offers: Offers;
  onMouseCardEnter?: (offer: Offer) => void;
  onMouseCardLeave?: () => void;
  classPrefix: string;
}

function CardsList({offers, onMouseCardEnter, onMouseCardLeave, classPrefix}: CardsListProps): JSX.Element {

  return(
    <>
      {offers.map((offer) => {
        const keyValue = offer.id;

        return(
          <Card offer={offer} key ={keyValue} handleMouseEnter={onMouseCardEnter} handleMouseLeave={onMouseCardLeave} classPrefix={classPrefix}/>
        );
      })}
    </>
  );
}

export default CardsList;
