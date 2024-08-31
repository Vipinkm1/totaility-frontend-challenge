import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import CartPage from './components/CartPage/CartPage'
import { CartProvider } from './components/CartContext'



function App() {
  return (
    <div>
 <CartProvider>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ='/cartpage' element={<CartPage/>}/>
      </Routes>
     </BrowserRouter>
     </CartProvider>

    </div>
  )
}

export default App
