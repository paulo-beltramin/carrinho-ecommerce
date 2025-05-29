import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/App'

import './index.css'
import { CartProvider } from './Components/Context/cartContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
  </StrictMode>,
)
