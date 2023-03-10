import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Addcart from '../Component/Addcart'
import Home from '../Component/Home'
// import Loging from '../Component/Loging'
// import AddCart from '../Component/AddCart'
// import Payment from '../Component/Payment'




const Rounting = () => {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/cartitems" element={<Addcart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default Rounting