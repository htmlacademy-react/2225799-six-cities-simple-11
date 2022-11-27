import {MouseEvent} from 'react';
import Logo from '../logo/logo';
import useAppSelector from '../../hooks/useAppSelector';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import useAppDispatch from '../../hooks/useAppDispatch';
import {logoutAction} from '../../store/api-actions';

function Header(): JSX.Element {
  const isAuthorized = useAppSelector((state) => state.authorizationStatus) === 'AUTH';
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleSignOut = (evt: MouseEvent<HTMLAnchorElement>):void => {
    evt.preventDefault();
    dispatch(logoutAction());
  };


  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuthorized
                &&
                (
                  <li className="header__nav-item user">
                    <div className="header__nav-profile">
                      <div
                        className="header__avatar-wrapper user__avatar-wrapper"
                        style={
                          user
                            ?
                            {
                              backgroundImage: `url(${user.avatarUrl})`,
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
                )}

              <li className="header__nav-item">
                {
                  isAuthorized
                    ?
                    (
                      <a className="header__nav-link" href="/" onClick={handleSignOut}>
                        <span className="header__signout">Sign out</span>
                      </a>
                    )
                    :
                    (
                      <Link className="header__nav-link" to={AppRoute.Login}>
                        <span className="header__signout">Sign in</span>
                      </Link>
                    )
                }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
