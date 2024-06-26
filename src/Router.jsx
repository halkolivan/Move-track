//Import components
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Template from './Template'
import './i18n'

//Import pages
import Home from './pages/Home'
import Error from './pages/Error'
import WarningLists from './components/WarningLists'
import DetailsFilm from './components/DetailsFilm'
import CartActor from './components/CartActor'

export default function Router() {
  const routing = createBrowserRouter([
    {
      path: '/',
      element: <Template />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/warningLists',
          element: <WarningLists />,
        },

        {
          path: '/detailsFilm',
          element: <DetailsFilm />,
        },

        {
          path: '/cartActor',
          element: <CartActor />,
        },
        {
          path: '*',
          element: <Error />,
        },
      ],
    },
  ])

  return <RouterProvider router={routing} />
}
