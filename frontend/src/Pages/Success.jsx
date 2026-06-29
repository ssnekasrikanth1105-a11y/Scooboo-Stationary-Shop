import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


function Success(){


return(

<Container>


<Card>


<Icon>
🎉
</Icon>


<Title>
Order Placed Successfully!
</Title>



<Text>

Thank you for shopping with us.
Your stationery order has been confirmed.

</Text>




<OrderBox>


<Detail>

Order ID

<strong>
#ST2026
</strong>

</Detail>



<Detail>

Payment

<strong>
Cash / Online

</strong>

</Detail>



<Detail>

Delivery

<strong>
3-5 Working Days

</strong>

</Detail>



</OrderBox>





<ButtonBox>



<HomeButton as={Link} to="/">

Go Home

</HomeButton>




<OrderButton as={Link} to="/orders">

Track Order

</OrderButton>



</ButtonBox>




</Card>



</Container>

)

}


export default Success;





// ================= STYLE =================



const Container=styled.div`

min-height:100vh;

display:flex;

align-items:center;

justify-content:center;


padding:40px;


background:

linear-gradient(
135deg,
#eef2ff,
#ffffff
);


`;





const Card=styled.div`

background:white;

max-width:600px;

width:100%;

padding:50px;

border-radius:30px;


text-align:center;


box-shadow:

0 20px 50px rgba(0,0,0,.15);


`;







const Icon=styled.div`

font-size:90px;

margin-bottom:20px;


`;







const Title=styled.h1`

font-size:38px;

color:#16a34a;


`;






const Text=styled.p`

font-size:18px;

color:#6b7280;

line-height:1.6;

margin:20px;


`;







const OrderBox=styled.div`

background:#f8fafc;

padding:25px;

border-radius:20px;

margin:30px 0;


`;








const Detail=styled.div`

display:flex;

justify-content:space-between;

padding:15px;


color:#374151;


border-bottom:

1px solid #e5e7eb;


`;







const ButtonBox=styled.div`

display:flex;

gap:20px;


@media(max-width:600px){

flex-direction:column;

}


`;







const HomeButton=styled.button`

flex:1;

padding:15px;


border:none;

border-radius:15px;


background:#2563eb;


color:white;

font-size:16px;

cursor:pointer;


`;







const OrderButton=styled.button`

flex:1;

padding:15px;


border:none;

border-radius:15px;


background:

linear-gradient(
135deg,
#8b5cf6,
#06b6d4
);


color:white;


font-size:16px;

cursor:pointer;


`;