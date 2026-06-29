import React,{useContext} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

import {
FaShoppingCart,
FaTrash
} from "react-icons/fa";


import {WishlistContext} from "../context/WishlistContext";
import {CartContext} from "../context/CartContext";





function Wishlist(){



const {

wishlist=[],

removeWishlist


}=useContext(WishlistContext);





const {

addToCart

}=useContext(CartContext);








const moveToCart=(product)=>{


addToCart(product);


removeWishlist(product.id);



};







return(



<Page>




<Title>

My Wishlist ❤️

</Title>








{

wishlist.length===0 ?





<Empty>


<h1>

❤️

</h1>


<h2>

Your wishlist is empty

</h2>



<Link to="/shop">


<button>

Explore Products

</button>


</Link>



</Empty>





:





<Grid>





{

wishlist.map(product=>(





<Card


key={product.id}


as={motion.div}



initial={{

opacity:0,

y:40

}}



animate={{

opacity:1,

y:0

}}




whileHover={{

scale:1.04,

y:-10

}}



>




<img

src={product.img}

alt={product.name}

/>







<h2>

{product.name}

</h2>






<h3>

₹{product.price}

</h3>







<Buttons>






<CartBtn


onClick={()=>moveToCart(product)}

>


<FaShoppingCart/>


Add Cart


</CartBtn>







<DeleteBtn


onClick={()=>removeWishlist(product.id)}

>


<FaTrash/>


</DeleteBtn>







</Buttons>








</Card>





))


}





</Grid>





}







</Page>



)

}




export default Wishlist;

const Page=styled.div`


min-height:100vh;


padding:60px;



background:

linear-gradient(
135deg,
#fff7ed,
#fce7f3,
#fef3c7
);



`;





const Title=styled.h1`


text-align:center;


color:#9d174d;


margin-bottom:50px;



`;






const Grid=styled.div`


display:grid;


grid-template-columns:repeat(3,1fr);


gap:30px;



@media(max-width:900px){

grid-template-columns:1fr 1fr;

}



@media(max-width:600px){

grid-template-columns:1fr;

}



`;







const Card=styled.div`


padding:25px;


border-radius:35px;



text-align:center;



background:

rgba(255,255,255,.65);



backdrop-filter:blur(20px);



box-shadow:

0 20px 50px #0002;





img{


width:100%;


height:250px;


object-fit:cover;


border-radius:25px;


}




h2{

color:#57534e;

}



h3{

color:#ec4899;

}



`;









const Buttons=styled.div`


display:flex;


justify-content:center;


gap:15px;



`;








const CartBtn=styled.button`


padding:12px 20px;


border:none;


border-radius:30px;



background:

linear-gradient(
90deg,
#d97706,
#ec4899
);



color:white;


cursor:pointer;



display:flex;


align-items:center;


gap:8px;



`;








const DeleteBtn=styled.button`


width:45px;


height:45px;



border:none;


border-radius:50%;



background:#fee2e2;


color:#dc2626;



cursor:pointer;



`;








const Empty=styled.div`


width:450px;


margin:100px auto;


padding:50px;



text-align:center;



border-radius:40px;



background:white;



h1{

font-size:80px;

}



button{


padding:15px 30px;


border:none;


border-radius:30px;


background:#ec4899;


color:white;


cursor:pointer;



}



`;