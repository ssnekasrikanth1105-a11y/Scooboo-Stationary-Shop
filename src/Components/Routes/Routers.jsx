import React,{useState,useEffect} from "react";

import {
Routes,
Route
} from "react-router-dom";


// COMPONENTS

import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollTop from "../ScrollTop";
import Loader from "../Loader";


// FRONT PAGES

import Home from "../Home";
import Shop from "../Shop";
import Collections from "../Collections";
import Deals from "../Deals";
import Login from "../Login";
import Register from "../Register";


// USER PAGES

import Cart from "../../Pages/Cart";
import Wishlist from "../../Pages/Wishlist";
import Contact from "../../Pages/Contactus";
import ProductDetails from "../../Pages/ProductDetails";
import Checkout from "../../Pages/Checkout";
import OrderSuccess from "../../Pages/OrderSuccess";
import Success from "../../Pages/Success";
import Profile from "../../Pages/Profile";
import UserOrders from "../../Pages/Orders";
import NotFound from "../../Pages/NotFound";



// ADMIN

import Dashboard from "../../Admin/Dashboard";
import AdminLayout from "../../Admin/Layout/AdminLayout";

import AdminLogin from "../../Admin/AdminLogin";
import ProtectedRoute from "../../Admin/ProtectedRoute";

import AdminProducts from "../../Admin/AdminProducts";
import Customers from "../../Admin/Customers";
import AdminOrders from "../../Admin/Orders";
import Contacts from "../../Admin/Contacts";



// TOAST

import {
ToastContainer
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";





function Routers(){



const [loading,setLoading]=useState(true);



useEffect(()=>{


setTimeout(()=>{

setLoading(false);

},1200);



},[]);




if(loading)

return <Loader/>;







return(


<>


<ScrollTop/>




<Routes>





{/* ================= HOME ================= */}



<Route

path="/"

element={

<>

<Navbar/>

<Home/>

<Footer/>

</>

}

/>









{/* ================= SHOP ================= */}



<Route

path="/shop"

element={

<>

<Navbar/>

<Shop/>

<Footer/>

</>

}

/>








<Route

path="/collection"

element={

<>

<Navbar/>

<Collections/>

<Footer/>

</>

}

/>








<Route

path="/deals"

element={

<>

<Navbar/>

<Deals/>

<Footer/>

</>

}

/>








{/* AUTH */}



<Route

path="/login"

element={

<>

<Navbar/>

<Login/>

</>

}

/>






<Route

path="/register"

element={

<>

<Navbar/>

<Register/>

</>

}

/>








{/* USER */}




<Route

path="/cart"

element={

<>

<Navbar/>

<Cart/>

</>

}

/>







<Route

path="/wishlist"

element={

<>

<Navbar/>

<Wishlist/>

</>

}

/>







<Route

path="/contact"

element={

<>

<Navbar/>

<Contact/>

<Footer/>

</>

}

/>







<Route

path="/product/:id"

element={

<>

<Navbar/>

<ProductDetails/>

</>

}

/>







<Route

path="/checkout"

element={

<>

<Navbar/>

<Checkout/>

</>

}

/>







<Route

path="/success"

element={

<>

<Navbar/>

<OrderSuccess/>

</>

}

/>







<Route

path="/success-page"

element={

<>

<Navbar/>

<Success/>

</>

}

/>







<Route

path="/profile"

element={

<>

<Navbar/>

<Profile/>

</>

}

/>








<Route

path="/orders"

element={

<>

<Navbar/>

<UserOrders/>

</>

}

/>













{/* ================= ADMIN LOGIN ================= */}





<Route

path="/admin-login"

element={

<AdminLogin/>

}

/>













{/* ================= ADMIN PANEL ================= */}




<Route


path="/admin/*"


element={


<ProtectedRoute>


<AdminLayout/>


</ProtectedRoute>


}



>





<Route

index

element={<Dashboard/>}

/>






<Route

path="products"

element={<AdminProducts/>}

/>







<Route

path="customers"

element={<Customers/>}

/>







<Route

path="orders"

element={<AdminOrders/>}

/>







<Route

path="contacts"

element={<Contacts/>}

/>





</Route>












{/* ================= 404 ================= */}




<Route

path="*"

element={

<>

<Navbar/>

<NotFound/>

<Footer/>

</>

}

/>






</Routes>







<ToastContainer


position="top-center"

autoClose={1800}

theme="dark"

closeOnClick

pauseOnHover


/>






</>


)

}



export default Routers;