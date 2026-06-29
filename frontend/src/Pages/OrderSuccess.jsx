import React from "react";
import styled,{keyframes} from "styled-components";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

import {
FaCheckCircle,
FaShoppingBag
} from "react-icons/fa";





function OrderSuccess(){



return(



<Page>



<Card

as={motion.div}

initial={{
scale:.7,
opacity:0
}}

animate={{
scale:1,
opacity:1
}}

>



<Icon>


<FaCheckCircle/>


</Icon>






<h1>

Order Placed Successfully 🎉

</h1>






<p>

Thank you for shopping with Scooboo.

Your order has been confirmed.

</p>








<OrderBox>


<h3>

Order Details

</h3>



<div>

Order ID

<b>

#SCOO2026

</b>

</div>



<div>

Payment

<b>

Cash On Delivery

</b>

</div>



<div>

Status

<b>

Processing

</b>

</div>



</OrderBox>









<Link to="/shop">


<Button>


<FaShoppingBag/>


Continue Shopping


</Button>


</Link>






</Card>






</Page>



)


}


export default OrderSuccess;
const Page=styled.div`


min-height:100vh;


display:flex;


align-items:center;


justify-content:center;


padding:40px;



background:

linear-gradient(
135deg,
#fff7ed,
#fce7f3,
#fef3c7
);



`;






const float=keyframes`


0%{

transform:translateY(0);

}


50%{

transform:translateY(-15px);

}


100%{

transform:translateY(0);

}



`;








const Card=styled.div`


width:500px;


padding:50px;


border-radius:45px;



text-align:center;




background:

rgba(255,255,255,.7);



backdrop-filter:blur(20px);



box-shadow:

0 30px 70px #0002;



h1{


color:#9d174d;


}



p{


color:#57534e;


font-size:18px;


}



`;









const Icon=styled.div`


font-size:90px;


color:#22c55e;



animation:${float} 2s infinite;



`;








const OrderBox=styled.div`



margin-top:30px;



padding:25px;



border-radius:25px;



background:#fff;



text-align:left;





div{


display:flex;


justify-content:space-between;



padding:12px 0;



color:#57534e;



}



b{


color:#ec4899;


}



`;









const Button=styled.button`


margin-top:30px;



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



font-size:16px;



cursor:pointer;



display:flex;


align-items:center;


gap:10px;



`;