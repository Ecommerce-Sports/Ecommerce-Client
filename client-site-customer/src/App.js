import React from "react";
import { Routes, Route , BrowserRouter as Router } from "react-router-dom";
import {
  Home,
  Category,
  AllProduct,
  DetailProduct,
  Cart,
  EditProfile,
  AddressList,
  PaymentSetting,
  SetNotification,
  OrderList,
  Wishlist,
  Login,
  Register,
  Checkout,
  Payment
} from "./layouts";
import { Provider } from "react-redux";
import store from './redux/store';
 
const App = () => {
  return(
    <>
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* path Customer */}
            <Route path="/" element={<Home />} />
            <Route path="/all-product" element={<AllProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/address-list" element={<AddressList />} />
            <Route path="/payment-setting" element={<PaymentSetting />} />
            <Route path="/set-notification" element={<SetNotification />} />
            <Route path="/order-list" element={<OrderList />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/detail-product/:id" element={<DetailProduct />} />
            <Route path="/category/:id" element={<Category />} />
          </Routes>
        </div>
      </Router>
      </Provider>
    </>
  )
};

export default App;