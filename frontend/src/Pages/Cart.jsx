import React,{useContext} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

import {CartContext} from "../context/CartContext";





function Cart(){



const {

cart=[],

removeCart,

increaseQty,

decreaseQty


}=useContext(CartContext);






const total = cart.reduce(

(sum,item)=>

sum + Number(item.price) * Number(item.qty || 1)

,0

);






return(



<Page>



<Title>

Shopping Cart 🛒

</Title>









{
cart.length===0 ?



<Empty>



<h1>

🛒

</h1>



<h2>

Your cart is empty

</h2>



<Link to="/shop">


<button>

Continue Shopping

</button>


</Link>



</Empty>





:



<Layout>







<ProductArea>






{

cart.map(item=>(




<Card


key={item.id}


as={motion.div}



initial={{
opacity:0,
y:30
}}



animate={{
opacity:1,
y:0
}}




whileHover={{

scale:.98

}}



>






<img

src={item.img}

alt={item.name}

/>






<div>


<h2>

{item.name}

</h2>



<h3>

₹{item.price}

</h3>








<Qty>



<button

onClick={()=>
decreaseQty(item.id)
}

>

-

</button>





<span>

{item.qty || 1}

</span>





<button

onClick={()=>
increaseQty(item.id)
}

>

+

</button>




</Qty>






<button

className="remove"

onClick={()=>
removeCart(item.id)
}


>

Remove

</button>






</div>






</Card>




))


}







</ProductArea>









<Summary>



<h1>

Order Summary ✨

</h1>







<Row>

<span>

Products

</span>


<b>

{cart.length}

</b>


</Row>









<Row>


<span>

Total

</span>



<b>

₹{total}

</b>


</Row>







<Link to="/checkout">


<Checkout>

Place Order 🎉

</Checkout>


</Link>






</Summary>







</Layout>



}






</Page>




)


}



export default Cart;











// ================= STYLE =================




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


color:#92400e;


margin-bottom:50px;


`;









const Layout=styled.div`


display:grid;


grid-template-columns:2fr 1fr;


gap:35px;



@media(max-width:900px){

grid-template-columns:1fr;

}



`;









const ProductArea=styled.div`


display:flex;


flex-direction:column;


gap:25px;



`;









const Card=styled.div`


padding:25px;


display:flex;


gap:25px;


align-items:center;



border-radius:35px;




background:

rgba(255,255,255,.65);



backdrop-filter:blur(20px);



box-shadow:

0 20px 50px #0002;





img{


width:150px;


height:150px;


object-fit:cover;


border-radius:25px;



}



h2{


color:#57534e;


}



h3{


color:#d97706;


}



.remove{


margin-top:15px;


border:none;


background:#fee2e2;


padding:10px 20px;


border-radius:20px;


color:#dc2626;


cursor:pointer;



}



@media(max-width:600px){


flex-direction:column;


}



`;









const Qty=styled.div`


display:flex;


align-items:center;


gap:15px;


margin-top:15px;



button{


width:35px;


height:35px;


border:none;


border-radius:50%;



background:

linear-gradient(
90deg,
#d97706,
#ec4899
);



color:white;


cursor:pointer;


font-size:18px;



}



span{


font-size:20px;


}


`;









const Summary=styled.div`


padding:35px;


height:max-content;


border-radius:40px;




background:

rgba(255,255,255,.7);



backdrop-filter:blur(20px);



box-shadow:0 20px 50px #0002;




h1{

color:#92400e;

}


`;









const Row=styled.div`


display:flex;


justify-content:space-between;


padding:15px 0;



color:#57534e;



b{

color:#ec4899;

}



`;









const Checkout=styled.button`


width:100%;


margin-top:25px;


padding:15px;



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



`;









const Empty=styled.div`


width:450px;


margin:100px auto;


padding:50px;



text-align:center;


border-radius:40px;



background:

rgba(255,255,255,.65);




h1{

font-size:80px;

}



button{


padding:15px 30px;


border:none;


border-radius:30px;


background:#d97706;


color:white;


cursor:pointer;


}



`;