import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import CartPage from './components/CartPage/CartPage'

import CheckOut from './components/Pages/CheckOut'
import { CartProvider } from './components/CartContext'




function App() {
  return (
    <>
 <CartProvider>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ='/cartpage' element={<CartPage/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>
     </BrowserRouter>
     </CartProvider>

    </>
  )
}

export default App
