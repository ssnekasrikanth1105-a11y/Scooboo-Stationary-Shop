import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

import {
FaBox,
FaUsers,
FaShoppingCart,
FaRupeeSign
} from "react-icons/fa";



function Dashboard(){


return(


<Page>



<Title>
Admin Dashboard ✨
</Title>





<Grid>




<Card

as={motion.div}

whileHover={{
scale:1.05
}}

>


<Icon>
<FaBox/>
</Icon>


<h2>
120
</h2>


<p>
Products
</p>


</Card>







<Card

as={motion.div}

whileHover={{
scale:1.05
}}

>


<Icon>
<FaUsers/>
</Icon>


<h2>
80
</h2>


<p>
Customers
</p>


</Card>








<Card

as={motion.div}

whileHover={{
scale:1.05
}}

>


<Icon>
<FaShoppingCart/>
</Icon>


<h2>
45
</h2>


<p>
Orders
</p>


</Card>








<Card

as={motion.div}

whileHover={{
scale:1.05
}}

>


<Icon>
<FaRupeeSign/>
</Icon>


<h2>
₹25K
</h2>


<p>
Revenue
</p>


</Card>






</Grid>






<Panel>


<h2>
Welcome Admin 👋
</h2>


<p>

Manage your stationery store from here.

</p>


</Panel>







</Page>


)


}


export default Dashboard;






const Page=styled.div`


padding:20px;



`;






const Title=styled.h1`


color:#78350f;


margin-bottom:30px;



`;








const Grid=styled.div`


display:grid;


grid-template-columns:repeat(4,1fr);


gap:25px;



@media(max-width:900px){

grid-template-columns:1fr 1fr;

}


@media(max-width:600px){

grid-template-columns:1fr;

}


`;








const Card=styled.div`



padding:30px;


border-radius:35px;



background:

rgba(255,255,255,.6);



backdrop-filter:blur(20px);



box-shadow:

0 20px 40px #0002;



h2{

font-size:40px;

color:#ec4899;

}



p{

color:#57534e;

}



`;








const Icon=styled.div`


font-size:35px;


color:#d97706;


`;









const Panel=styled.div`


margin-top:40px;


padding:35px;



border-radius:35px;



background:white;



box-shadow:0 20px 40px #0002;



h2{

color:#78350f;

}



p{

color:#57534e;

}



`;