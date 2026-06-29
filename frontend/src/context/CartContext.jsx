import React,{createContext,useState} from "react";
import {toast} from "react-toastify";


export const CartContext = createContext();




export function CartProvider({children}){



const [cart,setCart]=useState([]);






// ADD TO CART

const addToCart=(product)=>{



const exist = cart.find(
item=>item.id===product.id
);



if(exist){


toast.info("Already added 🛒");


return;


}




setCart([

...cart,

{

...product,

qty:1

}

]);



toast.success("Added to cart ✅");



};











// PLUS BUTTON


const increaseQty=(id)=>{


setCart(

cart.map(item=>


item.id===id

?

{

...item,

qty:item.qty+1

}


:

item


)

);



};











// MINUS BUTTON


const decreaseQty=(id)=>{



setCart(

cart.map(item=>{


if(
item.id===id &&
item.qty>1
){


return{

...item,

qty:item.qty-1

};


}



return item;


})


);



};












// REMOVE


const removeCart=(id)=>{



setCart(

cart.filter(
item=>item.id!==id
)

);



toast.error("Removed 🗑️");



};









return(



<CartContext.Provider


value={{

cart,

addToCart,

increaseQty,

decreaseQty,

removeCart


}}



>


{children}


</CartContext.Provider>



)



}