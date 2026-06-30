import React,{useState,useContext} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useParams} from "react-router-dom";

import {
FaShoppingCart,
FaHeart,
FaStar,
FaMinus,
FaPlus
} from "react-icons/fa";


import {CartContext} from "../context/CartContext";
import {WishlistContext} from "../context/WishlistContext";





function ProductDetails(){



const {id}=useParams();



const {addToCart}=useContext(CartContext);

const {addWishlist}=useContext(WishlistContext);






const products=[


{
id:"1",
name:"Premium Notebook",
price:299,
category:"Notebook",
img:"https://images.unsplash.com/photo-1531346878377-a5be20888e57",
desc:"Premium quality notebook for students and professionals."
},



{
id:"2",
name:"Luxury Pen",
price:199,
category:"Pen",
img:"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd",
desc:"Smooth writing luxury pen with elegant design."
},




{
id:"3",
name:"Designer Bag",
price:899,
category:"Bag",
img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
desc:"Stylish bag with premium finishing."
},




{
id:"4",
name:"Art Kit",
price:599,
category:"Art",
img:"https://images.unsplash.com/photo-1513364776144-60967b0f800f",
desc:"Complete art kit for creative minds."
}


];





const product=products.find(

p=>p.id===id

);





const [qty,setQty]=useState(1);





if(!product)

return <h1>Product Not Found</h1>;







return(



<Page>



<Card



as={motion.div}


initial={{
opacity:0,
y:50
}}


animate={{
opacity:1,
y:0
}}




>



<ImageBox>


<img src={product.img}/>


</ImageBox>









<Info>




<Category>

{product.category}

</Category>






<h1>

{product.name}

</h1>







<Stars>

<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>

</Stars>








<Price>

₹{product.price}

</Price>







<p>

{product.desc}

</p>







<Quantity>



<button

onClick={()=>{

if(qty>1)

setQty(qty-1)

}}

>

<FaMinus/>

</button>





<span>

{qty}

</span>





<button

onClick={()=>setQty(qty+1)}

>

<FaPlus/>

</button>



</Quantity>









<Buttons>



<CartBtn


onClick={()=>


addToCart({

...product,

quantity:qty

})


}


>


<FaShoppingCart/>

Add Cart


</CartBtn>







<WishBtn


onClick={()=>addWishlist(product)}

>


<FaHeart/>

</WishBtn>





</Buttons>






</Info>





</Card>





</Page>


)

}



export default ProductDetails;

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





const Card=styled.div`

width:90%;

margin:auto;


display:grid;

grid-template-columns:1fr 1fr;


gap:50px;


padding:40px;


border-radius:45px;



background:

rgba(255,255,255,.65);



backdrop-filter:blur(20px);



box-shadow:

0 30px 70px #0002;



@media(max-width:900px){

grid-template-columns:1fr;

}


`;









const ImageBox=styled.div`

img{


width:100%;


height:500px;


object-fit:cover;


border-radius:35px;



}


`;









const Info=styled.div`


padding:20px;


h1{

color:#78350f;

font-size:45px;

}



p{

color:#57534e;

font-size:18px;

line-height:1.6;

}


`;









const Category=styled.span`

background:#fed7aa;

padding:10px 20px;

border-radius:30px;

color:#9a3412;


`;








const Stars=styled.div`

color:#f59e0b;


display:flex;


gap:5px;


margin:20px 0;


`;








const Price=styled.h2`

color:#ec4899;

font-size:35px;


`;








const Quantity=styled.div`

display:flex;

align-items:center;

gap:20px;

margin:25px 0;



button{

width:40px;

height:40px;


border:none;

border-radius:50%;


background:#d97706;

color:white;


}



span{

font-size:25px;

}



`;









const Buttons=styled.div`

display:flex;

gap:20px;


`;









const CartBtn=styled.button`

padding:15px 30px;


border:none;


border-radius:30px;



background:

linear-gradient(
90deg,
#d97706,
#ec4899
);



color:white;


display:flex;


gap:10px;


align-items:center;


cursor:pointer;


`;








const WishBtn=styled.button`

width:55px;

height:55px;


border:none;


border-radius:50%;


background:#fee2e2;


color:#ef4444;


font-size:22px;


cursor:pointer;



`;