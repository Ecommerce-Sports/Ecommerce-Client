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
    {/* <Provider store={store}> */}
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* path Customer */}
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/all-product" element={<AllProduct />} />
            <Route path="/detail-product" element={<DetailProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/address-list" element={<AddressList />} />
            <Route path="/payment-setting" element={<PaymentSetting />} />
            <Route path="/set-notification" element={<SetNotification />} />
            <Route path="/order-list" element={<OrderList />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
      </Router>
      {/* </Provider> */}
    </>
  )
};

export default App;