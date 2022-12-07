import useAppSelector from '../../hooks/useAppSelector';
import {getUser} from '../../store/user/selectors';
import useAppDispatch from '../../hooks/useAppDispatch';
import {MouseEvent} from 'react';
import {logoutAction} from '../../store/api-actions';

function HeaderNavAuth(): JSX.Element {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const handleSignOut = (evt: MouseEvent<HTMLAnchorElement>):void => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <div className="header__nav-profile">
            <div
              className="header__avatar-wrapper user__avatar-wrapper"
              style={
                user
                  ?
                  {
                    backgroundImage: user.avatarUrl && `url(${user.avatarUrl})`,
                    borderRadius: '50%'
                  }
                  :
                  undefined
              }
            >
            </div>
            <span className="header__user-name user__name">{user?.email}</span>
          </div>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="/" onClick={handleSignOut}>
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavAuth;
