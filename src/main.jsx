import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Home } from './Pages/Home.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Pedido } from './Pages/Pedido.jsx'

const router= createBrowserRouter([
{
  path:"home",
  element:<Home></Home>,
},
{
  path:"pedido",
  element:<Pedido></Pedido>
}
]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={router} ></RouterProvider> */}
  </StrictMode>,
)
