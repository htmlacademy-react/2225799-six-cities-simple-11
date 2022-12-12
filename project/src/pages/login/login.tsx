import {Helmet} from 'react-helmet-async';
import {useRef, FormEvent, MouseEvent} from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import {loginAction} from '../../store/api-actions';
import Logo from '../../components/logo/logo';
import useAppSelector from '../../hooks/useAppSelector';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Navigate} from 'react-router-dom';
import {CITIES} from '../../const';
import randomElement from '../../services/random-element';
import {redirectToRoute} from '../../store/action';
import {chooseCityAction} from '../../store/offers/offers';

function Login(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const randomCity = randomElement(CITIES);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null && passwordRef.current.value.trim() !== '') {
      const loginData = {
        login: loginRef.current.value,
        password: passwordRef.current.value,
      };

      dispatch(loginAction(loginData));
    }
  };

  const handleRandomCityClick = (evt: MouseEvent<HTMLAnchorElement>):void => {
    evt.preventDefault();
    dispatch(redirectToRoute(AppRoute.Root));
    dispatch(chooseCityAction(randomCity));
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <>
      <Helmet>
        <title>six cities simple: authorization</title>
      </Helmet>
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo/>
              </div>
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action="#"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    ref={loginRef}
                    data-testid="login"
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    ref={passwordRef}
                    pattern='(?=.*?[0-9])(?=.*?[A-Za-z]).+'
                    data-testid="password"
                  />
                </div>
                <button
                  className="login__submit form__submit button"
                  type="submit"
                >
                  Sign in
                </button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="/" onClick={handleRandomCityClick}>
                  <span>{randomCity}</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default Login;
