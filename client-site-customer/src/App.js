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
  OrderList
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
            {/* <Route path="/admin/login" element={<Login />} /> */}

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
          </Routes>
        </div>
      </Router>
      {/* </Provider> */}
    </>
  )
};

export default App;