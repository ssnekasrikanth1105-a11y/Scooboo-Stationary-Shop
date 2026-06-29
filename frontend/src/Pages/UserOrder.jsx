import React from "react";
import styled from "styled-components";


function Orders(){


const orders=[

{
id:"#1001",
name:"Classmate Notebook",
price:"₹120",
status:"Delivered"
},

{
id:"#1002",
name:"Pen Set",
price:"₹80",
status:"Processing"
},

{
id:"#1003",
name:"Geometry Box",
price:"₹180",
status:"Shipped"
}

];



return (

<Container>


<Title>
📦 My Orders
</Title>



<OrderContainer>


{

orders.map(order=>(


<Card key={order.id}>


<h2>
{order.id}
</h2>


<Product>
{order.name}
</Product>



<Price>
{order.price}
</Price>



<Status>
{order.status}
</Status>



</Card>


))


}



</OrderContainer>


</Container>

)

}


export default Orders;







const Container = styled.div`

min-height:100vh;

padding:50px;


background:#f3f4f6;


`;





const Title = styled.h1`

text-align:center;

font-size:45px;


color:#111827;


`;





const OrderContainer = styled.div`

max-width:900px;

margin:auto;


`;





const Card = styled.div`

background:white;


padding:25px;


border-radius:25px;


margin:25px 0;


box-shadow:

0 10px 30px rgba(0,0,0,.1);


transition:.3s;



&:hover{

transform:translateY(-5px);

}


`;





const Product = styled.h3`

color:#374151;

`;





const Price = styled.p`

color:#2563eb;

font-size:22px;

font-weight:bold;


`;





const Status = styled.span`

background:#16a34a;

color:white;


padding:8px 20px;


border-radius:20px;


`;