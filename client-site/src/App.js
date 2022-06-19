import React from "react";
import { Routes, Route , BrowserRouter as Router } from "react-router-dom";
import Home from "./layouts/admin/Home";
import Login from "./layouts/admin/Login";
import Product from "./layouts/admin/Product";
import Category from "./layouts/admin/Category";
import AddProduct from "./layouts/admin/AddProduct";
import EditProduct from "./layouts/admin/EditProduct";
import Order from "./layouts/admin/Order";
import DetailOrder from "./layouts/admin/DetailOrder";
import CustomerList from "./layouts/admin/CustomerList";
import Banner from "./layouts/admin/Banner";
import Test from "./layouts/admin/test";
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
            <Route path="/register" />
            <Route path="/product" element={<Product />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
            <Route path="/category" element={<Category />} />
            <Route path="/order" element={<Order />} />
            <Route path="/detail-order/:id" element={<DetailOrder />} />
            <Route path="/customer-list" element={<CustomerList />} />
            <Route path="/banner" element={<Banner />} />
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
      </Provider>
    </>
  )
};

export default App;