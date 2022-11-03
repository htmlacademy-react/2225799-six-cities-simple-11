import {useState} from 'react';
import Card from '../../components/card/card';
import {Offers, Offer} from '../../types/offer';


type CardsListProps = {
  offers: Offers;
}

function CardsList({offers}: CardsListProps): JSX.Element {

  const [activeCard, setActiveCard] = useState<string | number>();
  const onMouseCardEnter = (offer: Offer) => {
    setActiveCard(offer.id);
  };

  const onMouseCardLeave = () => {
    setActiveCard('');
  };

  //Временная переменная
  const temp = activeCard ? activeCard?.toString() : '';

  return(
    <div className={`cities__places-list places__list tabs__content ${temp}`}>
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
