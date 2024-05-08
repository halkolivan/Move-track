import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Request from '../helpers/request'

// import styles
import 'src/assets/styles/pages/Home.scss'

// import components
import CartPopularFilms from 'src/components/CartPopularFilms.jsx'
import CartPopularSerial from 'src/components/CartPopularSerial.jsx'

//images
import search from 'src/assets/images/search.png'

export default function Home() {
  const { t, i18n } = useTranslation()
  const [popular, setPopular] = useState(undefined)
  const [page, setPage] = useState(1)

  //Request for get popular films
  useEffect(() => {
    Request()
      .get(`movie/popular?language=ru-RU&page=${page}`)
      .then(response => {
        const data = response.data.results.slice(0, 5)
        setPopular(data)
      })
  }, [page, i18n.language])

  return (
    <section>
      <div className='home'>
        <div className='description'>
          <h1>{t('hello')}</h1>
          <span>{t('descriptSite')}</span>
          <p>{t('socialNetwork')}</p>
          <ul>
            <li>
              <a
                href='https://t.me/movie_tracker_news'
                target='_blank'>
                {t('telegramNews')}
              </a>
            </li>
            <li>
              <a
                href='https://t.me/+2lEXfqjyC2NjZWMy'
                target='_blank'>
                {t('telegramForum')}
              </a>
            </li>
          </ul>
          <h3>{t('searchFilms')}</h3>
        </div>
        <div className='search'>
          <img
            src={search}
            alt=''
          />
          <input
            type='search'
            className='blinking-cursor'
          />
        </div>
        <div className='Popular'>
          <h2>{t('popularFilms')}</h2>
          <div className='Popular-cinema'>
            {popular ? (
              popular.map(item => (
                <NavLink
                  to={`/detailsFilm/${item.id}`}
                  key={item.id}>
                  <div className='films-list'>
                    <div className='films-list-image'>
                      <img
                        src={
                          'https://image.tmdb.org/t/p/original/' +
                          item.poster_path
                        }
                        alt=''
                      />
                    </div>
                    <div className='films-list-descript'>{item.overview}</div>
                  </div>
                </NavLink>
              ))
            ) : (
              <p>Загрузка</p>
            )}

            <CartPopularFilms />
          </div>
          <h2>{t('popularSerial')}</h2>
          <div className='Popular-cinema'>
            <NavLink to='/detailsFilm'>
              <div className='films-list'>
                <div className='films-list-image'>
                  <img
                    src=''
                    alt=''
                  />
                </div>
                <div className='films-list-descript'></div>
              </div>
            </NavLink>
            <NavLink to='/detailsFilm'>
              <div className='films-list'>
                <div className='films-list-image'>
                  <img
                    src=''
                    alt=''
                  />
                </div>
                <div className='films-list-descript'></div>
              </div>
            </NavLink>
            <NavLink to='/detailsFilm'>
              <div className='films-list'>
                <div className='films-list-image'>
                  <img
                    src=''
                    alt=''
                  />
                </div>
                <div className='films-list-descript'></div>
              </div>
            </NavLink>
            <NavLink to='/detailsFilm'>
              <div className='films-list'>
                <div className='films-list-image'>
                  <img
                    src=''
                    alt=''
                  />
                </div>
                <div className='films-list-descript'></div>
              </div>
            </NavLink>
            <NavLink to='/detailsFilm'>
              <div className='films-list'>
                <div className='films-list-image'>
                  <img
                    src=''
                    alt=''
                  />
                </div>
                <div className='films-list-descript'></div>
              </div>
            </NavLink>
            <CartPopularSerial />
          </div>
        </div>
      </div>
    </section>
  )
}
