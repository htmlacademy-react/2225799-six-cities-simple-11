import {useState} from 'react';
import {MouseEvent} from 'react';
import cn from 'classnames';
import {SortingTypeName} from '../../const';
import useAppSelector from '../../hooks/useAppSelector';
import {getSortingType} from '../../store/offers/selectors';
import useAppDispatch from '../../hooks/useAppDispatch';
import {selectSortingTypeAction} from '../../store/offers/offers';

function Sorting(): JSX.Element {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sortingTypes = Object.values(SortingTypeName);
  const selectedSortingOption = useAppSelector(getSortingType);
  const handleSortingTytleClick = ():void => {setIsOpen((state) => !state);};
  const handleSortingOptionClick = (sortingOption: string) => dispatch(selectSortingTypeAction(sortingOption));
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
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
            onClick={(evt: MouseEvent<HTMLLIElement>) => {
              evt.preventDefault();
              handleSortingOptionClick(sortingTypeItem);
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
