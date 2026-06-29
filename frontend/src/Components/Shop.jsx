import React,{useState,useContext} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

import {
FaHeart,
FaShoppingCart
} from "react-icons/fa";


import {CartContext} from "../context/CartContext";
import {WishlistContext} from "../context/WishlistContext";





function Shop(){



const {
addToCart
}=useContext(CartContext);



const {
addWishlist
}=useContext(WishlistContext);







const products=[


{
id:1,
name:"Premium Notebook",
price:299,
category:"Notebook",
img:"https://images.unsplash.com/photo-1531346878377-a5be20888e57"
},



{
id:2,
name:"Luxury Pen",
price:199,
category:"Pen",
img:"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd"
},




{
id:3,
name:"Designer Bag",
price:899,
category:"Bag",
img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
},



{
id:4,
name:"Art Kit",
price:599,
category:"Art",
img:"https://images.unsplash.com/photo-1513364776144-60967b0f800f"
},



{
id:5,
name:"Cute Diary",
price:349,
category:"Notebook",
img:"https://images.unsplash.com/photo-1517842645767-c639042777db"
},



{
id:6,
name:"Color Pencil Set",
price:249,
category:"Art",
img:"https://images.unsplash.com/photo-1594784059224-6b3f3d1c5c53"
}



];









const [search,setSearch]=useState("");

const [category,setCategory]=useState("All");

const [sort,setSort]=useState("");






let filtered = products.filter(p=>


p.name
.toLowerCase()
.includes(search.toLowerCase())

&&

(
category==="All"
||
p.category===category
)


);






if(sort==="low"){


filtered.sort(
(a,b)=>a.price-b.price
);


}




if(sort==="high"){


filtered.sort(
(a,b)=>b.price-a.price
);


}









return(



<Page>





<Title>

Premium Collection ✨

</Title>







<Controls>




<input


placeholder="Search products..."


value={search}


onChange={
e=>setSearch(e.target.value)
}


/>







<select

onChange={
e=>setCategory(e.target.value)
}


>


<option>
All
</option>


<option>
Notebook
</option>


<option>
Pen
</option>


<option>
Bag
</option>


<option>
Art
</option>



</select>









<select

onChange={
e=>setSort(e.target.value)
}


>


<option value="">
Sort
</option>



<option value="low">

Low Price

</option>



<option value="high">

High Price

</option>



</select>





</Controls>









<Grid>





{

filtered.map(product=>(




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

scale:1.05,

y:-12

}}




transition={{

duration:.4

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






<button


onClick={()=>


addToCart({

...product,

qty:1

})


}


>


<FaShoppingCart/>

</button>








<button


onClick={()=>addWishlist(product)}


>


<FaHeart/>


</button>






</Buttons>








</Card>




))


}







</Grid>






</Page>


)


}




export default Shop;











// ================= STYLE =================





const Page=styled.div`


min-height:100vh;


padding:60px;


background:


linear-gradient(
135deg,
#fff7ed,
#fef3c7,
#fae8ff
);



`;







const Title=styled.h1`


text-align:center;


color:#78350f;


margin-bottom:40px;



`;








const Controls=styled.div`


display:flex;


justify-content:center;


gap:20px;


margin-bottom:50px;



input,select{


padding:15px 25px;


border:none;


border-radius:30px;



background:white;


box-shadow:0 10px 30px #0002;



outline:none;



}



@media(max-width:700px){


flex-direction:column;


}



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


padding:20px;


border-radius:35px;



background:

rgba(255,255,255,.65);



backdrop-filter:blur(20px);



box-shadow:

0 20px 50px #0002;



text-align:center;



img{


width:100%;


height:260px;


object-fit:cover;


border-radius:25px;



}



h2{

color:#57534e;

}



h3{

color:#d97706;


}



`;








const Buttons=styled.div`


display:flex;


justify-content:center;


gap:20px;



button{


width:45px;


height:45px;


border:none;


border-radius:50%;



background:

linear-gradient(
135deg,
#d97706,
#ec4899
);



color:white;


cursor:pointer;



transition:.3s;



&:hover{


transform:scale(1.15);


}



}



`;