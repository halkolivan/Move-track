import { useTranslation } from "react-i18next";
import { Scrollbars } from "react-custom-scrollbars";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import "src/assets/styles/components/CartFilms.scss";

//import images
import List from "src/assets/images/list.png";

export default function CartPopularFilms() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const openPopWindow = () => {
    setIsOpen(true);
  };
  const closePopWindow = () => {
    setIsOpen(false);
  };

  return (
    <div className="popular-films" style={{ zIndex: isOpen ? 2 : 0 }}>
      <button onClick={openPopWindow}>{t("fullList")}</button>
      {isOpen && (
        <div className="overlay">
          <div className="films-box">
            <div className="films-box-title">
              <span>{t("popularFilms")}</span>
              <button onClick={closePopWindow}>+</button>
            </div>
            <div className="films-box-carts">
              <div className="films-box-carts-column">
                <div>
                  <div className="rank"></div>
                  <button className="push-list">
                    <img src={List} alt="none image" />
                    <span>{t("addList")}</span>
                  </button>
                  <NavLink to="/detailsFilm">
                    <img src="" alt="" />
                  </NavLink>
                </div>
                <div>
                  <div className="rank"></div>
                  <button className="push-list">
                    <img src={List} alt="none image" />
                    <span>{t("addList")}</span>
                  </button>
                  <NavLink to="/detailsFilm">
                    <img src="" alt="" />
                  </NavLink>
                </div>
              </div>
              <div className="films-box-carts-column">
                <div>
                  <div className="rank"></div>
                  <button className="push-list">
                    <img src={List} alt="none image" />
                    <span>{t("addList")}</span>
                  </button>
                  <NavLink to="/detailsFilm">
                    <img src="" alt="" />
                  </NavLink>
                </div>
                <div>
                  <div className="rank"></div>
                  <button className="push-list">
                    <img src={List} alt="none image" />
                    <span>{t("addList")}</span>
                  </button>
                  <NavLink to="/detailsFilm">
                    <img src="" alt="" />
                  </NavLink>
                </div>
              </div>
              <div className="films-box-carts-column">
                <div>
                  <div className="rank"></div>
                  <button className="push-list">
                    <img src={List} alt="none image" />
                    <span>{t("addList")}</span>
                  </button>
                  <NavLink to="/detailsFilm">
                    <img src="" alt="" />
                  </NavLink>
                </div>
                <div>
                  <div className="rank"></div>
                  <button className="push-list">
                    <img src={List} alt="none image" />
                    <span>{t("addList")}</span>
                  </button>
                  <NavLink to="/detailsFilm">
                    <img src="" alt="" />
                  </NavLink>
                </div>
              </div>
              <div className="films-box-carts-column">
                <div>
                  <div className="rank"></div>
                  <button className="push-list">
                    <img src={List} alt="none image" />
                    <span>{t("addList")}</span>
                  </button>
                  <NavLink to="/detailsFilm">
                    <img src="" alt="" />
                  </NavLink>
                </div>
                <div>
                  <div className="rank"></div>
                  <button className="push-list">
                    <img src={List} alt="none image" />
                    <span>{t("addList")}</span>
                  </button>
                  <NavLink to="/detailsFilm">
                    <img src="" alt="" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
