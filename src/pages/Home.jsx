import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

// import styles
import "src/assets/styles/pages/Home.scss";

// import components
import CartPopularFilms from "src/components/CartPopularFilms.jsx";
import CartPopularSerial from "src/components/CartPopularSerial.jsx";

//images
import search from "src/assets/images/search.png";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="home">
        <div className="description">
          <h1>{t("hello")}</h1>
          <span>{t("descriptSite")}</span>
          <p>{t("socialNetwork")}</p>
          <ul>
            <li>
              <a href="https://t.me/movie_tracker_news" target="_blank">
                {t("telegramNews")}
              </a>
            </li>
            <li>
              <a href="https://t.me/+2lEXfqjyC2NjZWMy" target="_blank">
                {t("telegramForum")}
              </a>
            </li>
          </ul>
          <h3>{t("searchFilms")}</h3>
        </div>
        <div className="search">
          <img src={search} alt="" />
          <input type="search" className="blinking-cursor" />
        </div>
        <div className="Popular">
          <h2>{t("popularFilms")}</h2>
          <div className="Popular-cinema">
            <NavLink to="/detailsFilm">
              <div className="films-list">
                <div className="films-list-image">
                  <img src="" alt="" />
                </div>
                <div className="films-list-descript"></div>
              </div>
            </NavLink>
            <NavLink to="/detailsFilm">
              <div className="films-list">
                <div className="films-list-image">
                  <img src="" alt="" />
                </div>
                <div className="films-list-descript"></div>
              </div>
            </NavLink>
            <NavLink to="/detailsFilm">
              <div className="films-list">
                <div className="films-list-image">
                  <img src="" alt="" />
                </div>
                <div className="films-list-descript"></div>
              </div>
            </NavLink>
            <NavLink to="/detailsFilm">
              <div className="films-list">
                <div className="films-list-image">
                  <img src="" alt="" />
                </div>
                <div className="films-list-descript"></div>
              </div>
            </NavLink>
            <NavLink to="/detailsFilm">
              <div className="films-list">
                <div className="films-list-image">
                  <img src="" alt="" />
                </div>
                <div className="films-list-descript"></div>
              </div>
            </NavLink>
            <CartPopularFilms />
          </div>
          <h2>{t("popularSerial")}</h2>
          <div className="Popular-cinema">
            <NavLink to="/detailsFilm">
              <div className="films-list">
                <div className="films-list-image">
                  <img src="" alt="" />
                </div>
                <div className="films-list-descript"></div>
              </div>
            </NavLink>
            <NavLink to="/detailsFilm">
              <div className="films-list">
                <div className="films-list-image">
                  <img src="" alt="" />
                </div>
                <div className="films-list-descript"></div>
              </div>
            </NavLink>
            <NavLink to="/detailsFilm">
              <div className="films-list">
                <div className="films-list-image">
                  <img src="" alt="" />
                </div>
                <div className="films-list-descript"></div>
              </div>
            </NavLink>
            <NavLink to="/detailsFilm">
              <div className="films-list">
                <div className="films-list-image">
                  <img src="" alt="" />
                </div>
                <div className="films-list-descript"></div>
              </div>
            </NavLink>
            <NavLink to="/detailsFilm">
              <div className="films-list">
                <div className="films-list-image">
                  <img src="" alt="" />
                </div>
                <div className="films-list-descript"></div>
              </div>
            </NavLink>
            <CartPopularSerial />
          </div>
        </div>
      </div>
    </section>
  );
}
