import Logo from '../logo/logo';
import useAppSelector from '../../hooks/useAppSelector';
import {getAuthorizationStatus} from '../../store/user/selectors';
import HeaderNavAuth from '../header-nav-auth/header-nav-auth';
import HeaderNavNoAuth from '../header-nav-no-auth/header-nav-no-auth';

function Header(): JSX.Element {
  const isAuthorized = useAppSelector(getAuthorizationStatus) === 'AUTH';

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          {isAuthorized ? <HeaderNavAuth/> : <HeaderNavNoAuth/>}
        </div>
      </div>
    </header>
  );
}

export default Header;
