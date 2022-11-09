import Card from '../../components/card/card';
import {Offers, Offer} from '../../types/offer';


type CardsListProps = {
  offers: Offers;
  onMouseCardEnter: (offer: Offer) => void;
  onMouseCardLeave: () => void;
}

function CardsList({offers, onMouseCardEnter, onMouseCardLeave}: CardsListProps): JSX.Element {

  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = offer.id;

        return(
          <Card offer={offer} key ={keyValue} handleMouseEnter={onMouseCardEnter} handleMouseLeave={onMouseCardLeave}/>
        );
      })}
    </div>
  );
}

export default CardsList;
