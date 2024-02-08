import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import { FoodPage } from './Pages/Food/FoodPage';
import { CartPage } from './Pages/Cart/CartPage';
import {LoginPage} from './Pages/Login/LoginPage';
import { RegisterPage } from './Pages/Register/RegisterPage';
import { AuthRoute } from './components/AuthRoute/AuthRoute';
import { CheckoutPage } from './Pages/Checkout/CheckoutPage';
import PaymentPage from './Pages/Payment/PaymentPage';
import { ProfilePage } from './Pages/Profile/ProfilePage';
import OrdersPage from './Pages/Orders/OrdersPage';
import { OrderTrackPage } from './Pages/OrderTrack/OrderTrackPage';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/search/:searchTerm" element={<HomePage/>}></Route>
        <Route path="/tag/:tag" element={<HomePage/>}></Route>
        <Route path="/food/:id" element={<FoodPage/>}></Route>
        <Route path="/cart" element={<CartPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route 
        path="/checkout" 
        element={
          <AuthRoute>
          <CheckoutPage/>
          </AuthRoute>
        }
        />
        <Route 
        path="/payment" 
        element={
          <AuthRoute>
          <PaymentPage/>
          </AuthRoute>
        }
        />
        <Route 
        path="/track/:orderId" 
        element={
          <AuthRoute>
          <OrderTrackPage/>
          </AuthRoute>
        }
        />
        <Route 
        path="/profile" 
        element={
          <AuthRoute>
          <ProfilePage/>
          </AuthRoute>
        }
        />
        <Route 
        path="/orders/:filter?" 
        element={
          <AuthRoute>
          <OrdersPage/>
          </AuthRoute>
        }
        />
    </Routes>
    
  );
}
