import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import Routers from "./Components/Routes/Routers";

import {CartProvider} from "./context/CartContext";


function App(){


return(


<CartProvider>


<BrowserRouter>


<Routers/>


<ToastContainer
position="top-center"
autoClose={1500}
/>


</BrowserRouter>


</CartProvider>


)

}


export default App;