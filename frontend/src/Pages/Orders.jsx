import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";



function Orders(){



const orders=[


{
id:"#NC1001",
product:"Premium Notebook",
price:"₹299",
status:"Delivered"
},



{
id:"#NC1002",
product:"Luxury Pen",
price:"₹699",
status:"Shipped"
},



{
id:"#NC1003",
product:"Designer Bag",
price:"₹1299",
status:"Processing"
}



];







return(



<Page>



<Title>
My Orders 📦
</Title>





<Grid>




{

orders.map(order=>(



<Card


key={order.id}


as={motion.div}


whileHover={{
scale:1.04
}}



>




<h2>

{order.product}

</h2>




<p>
Order {order.id}
</p>



<h1>

{order.price}

</h1>






<Status>

{order.status}

</Status>






</Card>



))


}



</Grid>







</Page>



)

}



export default Orders;








// STYLE



const Page=styled.div`


min-height:100vh;


padding:50px;



background:

linear-gradient(
135deg,
#fffaf0,
#fff1f2,
#fef3c7
);



`;







const Title=styled.h1`


color:#92400e;


font-weight:500;


`;







const Grid=styled.div`


display:grid;


grid-template-columns:repeat(3,1fr);


gap:30px;



@media(max-width:900px){

grid-template-columns:1fr;

}



`;








const Card=styled.div`


padding:35px;



border-radius:40px;



background:

rgba(255,255,255,.7);



backdrop-filter:blur(20px);



box-shadow:0 20px 50px #0002;



h2{

color:#57534e;

font-weight:500;

}



h1{

color:#ec4899;

}



`;









const Status=styled.span`



display:inline-block;


padding:10px 25px;


border-radius:25px;



background:#fef3c7;



color:#92400e;



`;