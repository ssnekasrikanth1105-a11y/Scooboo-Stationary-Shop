import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";



function Profile(){


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



<Avatar>
👤
</Avatar>





<h1>
Sneka
</h1>


<p>
Premium Customer ✨
</p>







<Info>



<Box>

<h2>
25
</h2>

<span>
Orders
</span>


</Box>





<Box>

<h2>
₹18K
</h2>

<span>
Spent
</span>


</Box>





<Box>

<h2>
5
</h2>

<span>
Wishlist
</span>


</Box>



</Info>









<Details>



<h3>
📧 Email
</h3>

<p>
sneka@gmail.com
</p>



<h3>
📍 Address
</h3>

<p>
Chennai, India
</p>



</Details>






<Link to="/orders">

<button>

View Orders

</button>

</Link>






</Card>





</Page>


)


}


export default Profile;











// STYLE



const Page=styled.div`


min-height:100vh;


display:flex;


justify-content:center;


padding:60px;



background:

linear-gradient(
135deg,
#fffaf0,
#fff1f2,
#fef3c7
);



`;







const Card=styled.div`


width:600px;


padding:50px;


border-radius:45px;



background:

rgba(255,255,255,.7);



backdrop-filter:blur(25px);



box-shadow:

0 30px 70px #0002;



text-align:center;



h1{

color:#92400e;

font-weight:500;

}



p{

color:#78716c;

}



button{


padding:15px 35px;


border:none;


border-radius:30px;



background:

linear-gradient(
90deg,
#d97706,
#ec4899
);



color:white;



}



`;







const Avatar=styled.div`


width:120px;


height:120px;



margin:auto;



border-radius:50%;



display:flex;


align-items:center;


justify-content:center;



font-size:60px;



background:

linear-gradient(
135deg,
#f59e0b,
#ec4899
);



`;








const Info=styled.div`


display:grid;


grid-template-columns:repeat(3,1fr);


gap:20px;


margin:40px 0;


`;








const Box=styled.div`


padding:25px;


border-radius:30px;



background:#fff7ed;



h2{

color:#ec4899;

}



`;








const Details=styled.div`


text-align:left;


padding:25px;



`;