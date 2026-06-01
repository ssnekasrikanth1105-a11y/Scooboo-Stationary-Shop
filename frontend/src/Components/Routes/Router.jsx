// import React from "react";
// import { Routes, Route } from "react-router-dom";

// // ================= IMPORT COMPONENTS =================
// import Home from "../Components/Home";
// import Shop from "../Components/Shop";
// import Collections from "../Components/Collections";
// import Deals from "../Components/Deals";
// import Login from "../Components/Login";

// // ================= IMPORT PAGES =================
// import Cart from "../Pages/Cart";
// import Contact from "../Pages/Contact";
// import Wishlist from "../Pages/Wishlist";
// import Products from "../../Pages/Products";
// const Routers = () => {
//   return (

//     <Routes>

//       <Route path="/" element={<Home />} />

//       <Route path="/shop" element={<Shop />} />

//       <Route path="/collection" element={<Collections />} />

//       <Route path="/deals" element={<Deals />} />

//       <Route path="/login" element={<Login />} />

//       <Route path="/cart" element={<Cart />} />

//       <Route path="/contact" element={<Contact />} />

//       <Route path="/wishlist" element={<Wishlist />} />

 
//     </Routes>

//   );
// };

// export default Routers;

import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Home from "../Home";
import Shop from "../Shop";

import Collections from "../Collections";
import Deals from "../Deals";
import Login from "../Login";
import Register from "../Register"

// Pages
import Cart from "../../Pages/Cart";
import Contact from "../../Pages/Contactus";
import Wishlist from "../../Pages/Wishlist";

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
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routers;