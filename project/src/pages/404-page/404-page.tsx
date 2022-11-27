import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';

function Page404(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>six cities simple: page not found</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--404">
        <section className="page-404 container">
          <h1>404. Page not found</h1>
          <Link to="/">Вернуться на главную</Link>
        </section>
      </main>
    </>
  );
}

export default Page404;
