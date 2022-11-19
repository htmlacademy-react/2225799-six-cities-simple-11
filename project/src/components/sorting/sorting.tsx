import {useState} from 'react';
import cn from 'classnames';
import {SortingTypeNames} from '../../const';
import useAppSelector from '../../hooks/useAppSelector';

type SortingProps = {
  onSortingOptionClick: (cityName: string) => void;
}

function Sorting({onSortingOptionClick}:SortingProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sortingTypes = Object.values(SortingTypeNames);
  const handleSortingTytleClick = ():void => {setIsOpen((state) => !state);};
  const selectedSortingOption = useAppSelector((state) => state.sortingType);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortingTytleClick}>
        {selectedSortingOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn(
        'places__options',
        'places__options--custom',
        {'places__options--opened' : isOpen})}
      >
        {sortingTypes.map((sortingTypeItem: string) => (
          <li
            className={cn(
              'places__option',
              {'places__option--active' : sortingTypeItem === selectedSortingOption})}
            key={sortingTypeItem.trim()}
            tabIndex={0}
            onClick={() => {
              onSortingOptionClick(sortingTypeItem);
              setIsOpen((state) => !state);
            }}
          >
            {sortingTypeItem}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
