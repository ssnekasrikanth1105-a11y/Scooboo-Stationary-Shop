import React,{useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

import {
FaUser,
FaEnvelope,
FaShoppingBag,
FaSearch
} from "react-icons/fa";





function Customers(){



const customers=[


{
id:1,
name:"Ananya",
email:"ananya@gmail.com",
orders:12,
status:"Active"
},



{
id:2,
name:"Rahul",
email:"rahul@gmail.com",
orders:8,
status:"Active"
},



{
id:3,
name:"Priya",
email:"priya@gmail.com",
orders:15,
status:"New"
},



{
id:4,
name:"Kavin",
email:"kavin@gmail.com",
orders:5,
status:"Active"
},



];





const [search,setSearch]=useState("");





const filtered=customers.filter(c=>

c.name
.toLowerCase()
.includes(
search.toLowerCase()
)

);







return(



<Page>



<Title>
Customers 👥
</Title>






<SearchBox>


<FaSearch/>


<input

placeholder="Search customer..."

onChange={
e=>setSearch(e.target.value)
}


/>



</SearchBox>









<Stats>




<Stat>

<h1>
1200+
</h1>

<p>
Total Customers
</p>


</Stat>





<Stat>

<h1>
950
</h1>

<p>
Active Users
</p>


</Stat>






<Stat>

<h1>
250+
</h1>

<p>
New Customers
</p>


</Stat>




</Stats>









<Grid>





{

filtered.map(c=>(


<Card


key={c.id}


as={motion.div}


whileHover={{
y:-12,
scale:1.03
}}



>





<Avatar>

<FaUser/>

</Avatar>





<h2>
{c.name}
</h2>




<p>

<FaEnvelope/>

{c.email}

</p>






<Order>

<FaShoppingBag/>

{c.orders} Orders


</Order>





<Badge>

{c.status}

</Badge>






</Card>


))


}





</Grid>






</Page>



)

}



export default Customers;









// ================= STYLE =================





const Page=styled.div`


min-height:100vh;


padding:50px;



background:


linear-gradient(
135deg,
#fff7ed,
#fef3c7,
#fae8ff
);



`;










const Title=styled.h1`


color:#78350f;


margin-bottom:35px;



`;











const SearchBox=styled.div`


width:350px;


padding:15px 25px;



border-radius:30px;




background:

rgba(255,255,255,.65);




backdrop-filter:blur(20px);





display:flex;


gap:15px;


align-items:center;






input{


border:none;


outline:none;



background:transparent;



}



`;









const Stats=styled.div`


display:grid;


grid-template-columns:
repeat(3,1fr);



gap:25px;



margin:40px 0;



@media(max-width:800px){

grid-template-columns:1fr;

}



`;









const Stat=styled.div`


padding:30px;


border-radius:35px;



background:

rgba(255,255,255,.6);



backdrop-filter:blur(20px);





h1{

color:#d97706;

}



p{

color:#57534e;

}



`;










const Grid=styled.div`


display:grid;


grid-template-columns:
repeat(4,1fr);



gap:25px;



@media(max-width:1000px){

grid-template-columns:1fr 1fr;

}



@media(max-width:600px){

grid-template-columns:1fr;

}



`;









const Card=styled.div`


padding:30px;



text-align:center;




border-radius:40px;





background:

rgba(255,255,255,.65);




backdrop-filter:blur(20px);





box-shadow:

0 25px 50px #0002;




p{

color:#57534e;


display:flex;


gap:8px;


justify-content:center;


}



`;











const Avatar=styled.div`


width:70px;


height:70px;



margin:auto;



border-radius:50%;



display:flex;


align-items:center;


justify-content:center;





background:

linear-gradient(
135deg,
#d97706,
#ec4899
);



color:white;



font-size:30px;



`;











const Order=styled.div`



margin:20px;



color:#92400e;



`;











const Badge=styled.span`



padding:8px 18px;



border-radius:20px;



background:#dcfce7;



color:#15803d;



font-size:14px;



`;