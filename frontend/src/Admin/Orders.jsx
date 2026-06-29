import React,{useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

import {
FaBoxOpen,
FaTruck,
FaCheckCircle
} from "react-icons/fa";



function AdminOrders(){



const [orders,setOrders]=useState([


{
id:101,
customer:"Sneka",
product:"Premium Notebook",
amount:499,
status:"Pending"
},



{
id:102,
customer:"Alex",
product:"Stationery Kit",
amount:799,
status:"Processing"
},



{
id:103,
customer:"John",
product:"Color Pens",
amount:299,
status:"Delivered"
}



]);








const updateStatus=(id,value)=>{


setOrders(

orders.map(order=>

order.id===id

?

{
...order,
status:value
}

:

order

)

);


};







return(


<Page>


<Title>
Orders Management 🚚
</Title>




<Grid>



{

orders.map(order=>(



<Card


as={motion.div}


whileHover={{
scale:1.03
}}



key={order.id}



>



<Icon>


{
order.status==="Delivered"

?

<FaCheckCircle/>

:

order.status==="Processing"

?

<FaTruck/>

:

<FaBoxOpen/>

}


</Icon>





<h2>
Order #{order.id}
</h2>




<p>

Customer:

<b>
{order.customer}
</b>

</p>





<p>

Product:

<b>
{order.product}
</b>

</p>





<h3>

₹{order.amount}

</h3>





<Select


value={order.status}


onChange={
e=>
updateStatus(
order.id,
e.target.value
)
}


>


<option>
Pending
</option>


<option>
Processing
</option>


<option>
Shipped
</option>


<option>
Delivered
</option>



</Select>





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


export default AdminOrders;









const Page=styled.div`


padding:20px;


`;






const Title=styled.h1`


color:#78350f;


margin-bottom:30px;


`;







const Grid=styled.div`


display:grid;


grid-template-columns:repeat(3,1fr);


gap:25px;




@media(max-width:900px){

grid-template-columns:1fr;

}



`;







const Card=styled.div`


padding:30px;


border-radius:35px;


background:

rgba(255,255,255,.65);



backdrop-filter:blur(20px);



box-shadow:

0 20px 40px #0002;



p{

color:#57534e;

}



h3{

color:#ec4899;

}



`;








const Icon=styled.div`


font-size:40px;


color:#d97706;


`;








const Select=styled.select`


width:100%;


padding:12px;


border:none;


border-radius:25px;


margin-top:15px;


background:#fff;


`;








const Status=styled.div`


margin-top:15px;


padding:10px;


border-radius:20px;


background:#fef3c7;


text-align:center;


color:#92400e;


`;