import React,{createContext,useState} from "react";
import {toast} from "react-toastify";


export const WishlistContext = createContext();




export function WishlistProvider({children}){


const [wishlist,setWishlist]=useState([]);







const addWishlist=(product)=>{


const exist = wishlist.find(

item=>item.id===product.id

);



if(exist){


toast.info("Already in wishlist ❤️");


return;


}





setWishlist([

...wishlist,

product

]);



toast.success("Added to wishlist ❤️");


};









const removeWishlist=(id)=>{


setWishlist(

wishlist.filter(
item=>item.id!==id
)

);



toast.error("Removed from wishlist");


};









return(


<WishlistContext.Provider


value={{

wishlist,

addWishlist,

removeWishlist


}}


>


{children}


</WishlistContext.Provider>



)



}