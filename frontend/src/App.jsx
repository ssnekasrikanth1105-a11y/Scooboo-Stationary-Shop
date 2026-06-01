import React from "react";
import { Routes, Route } from "react-router-dom";


// ================= IMPORT COMPONENTS =================

import Home from "../src/Components/Home";
import Shop from "../src/Components/Shop";
import Collections from "../src/Components/Collections";
import Deals from "../src/Components/Deals";
import Login from "../src/Components/Login";

// ================= IMPORT PAGES =================

import Cart from "../src/Pages/Cart";
import Contact from "./Pages/Contactus";
import Wishlist from "../src/Pages/Wishlist";
import Products from "../src/Components/Shop";
import Register from "./Components/Register";



import Dashboard from "./Admin/Dashboard";
import AdminProducts from "./Admin/AdminProducts";
import Customers from "./Admin/Customers";
import Orders from "./Admin/Orders";
import Contacts from "./Admin/Contacts";

const Routers = () => {
  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/shop" element={<Shop />} />

      <Route path="/collection" element={<Collections />} />

      <Route path="/deals" element={<Deals />} />

      <Route path="/login" element={<Login />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/wishlist" element={<Wishlist />} />

      <Route path="/products" element={<Products />} />
      
      <Route path="/register" element={<Register />} />

      <Route path="/admin" element={<Dashboard />} />

<Route path="/admin/products" element={<AdminProducts />}
/>

<Route path="/admin/customers" element={<Customers />} />

<Route path="/admin/orders" element={<Orders />} />

<Route path="/admin/contacts" element={<Contacts />} />

    </Routes>

  );
};

export default Routers;