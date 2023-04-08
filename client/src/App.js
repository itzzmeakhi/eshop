import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Pdp from './pages/Pdp/Pdp';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Shipping from './pages/Shipping/Shipping';
import PaymentMethod from './pages/PaymentMethod/PaymentMethod';
import OrderSummary from './pages/OrderSummary/OrderSummary';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='product/:id' element={<Pdp />} />
          <Route path='cart'>
            <Route index element={<Cart />} />
            <Route path=':productId' element={<Cart />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='profile' element={<Profile />} />
          <Route path='shipping' element={<Shipping />} />
          <Route path='payment' element={<PaymentMethod />} />
          <Route path='summary' element={<OrderSummary />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
