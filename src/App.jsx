import MainLayout from './pages/MainLayout'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/home',
        element: <HomePage />
      },
      {
        path: '/product/:productId',
        element: <ProductPage />,
      },
    ]
  },
  {
    base: "/czechitas-react2-projekt-nabytek"
  }
]
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
