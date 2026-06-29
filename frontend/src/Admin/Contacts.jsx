import React,{useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

import {
FaEnvelope,
FaTrash,
FaSearch,
FaCheckCircle
} from "react-icons/fa";





function Contacts(){



const [messages,setMessages]=useState([


{
id:1,
name:"Ananya",
email:"ananya@gmail.com",
message:"I want bulk notebook order details.",
status:"New"
},



{
id:2,
name:"Rahul",
email:"rahul@gmail.com",
message:"When will my order arrive?",
status:"Replied"
},



{
id:3,
name:"Priya",
email:"priya@gmail.com",
message:"Loved your stationery collection ❤️",
status:"New"
}


]);







const [search,setSearch]=useState("");







const remove=(id)=>{


setMessages(

messages.filter(
m=>m.id!==id
)

);


};







const filtered=messages.filter(m=>

m.name
.toLowerCase()
.includes(
search.toLowerCase()
)

);








return(


<Page>




<Title>
Customer Messages ✉️
</Title>






<Search>



<FaSearch/>


<input

placeholder="Search message..."

onChange={
e=>setSearch(e.target.value)
}


/>



</Search>









<Grid>





{

filtered.map(msg=>(


<Card


key={msg.id}


as={motion.div}


whileHover={{
y:-10
}}



>




<Icon>

<FaEnvelope/>

</Icon>





<h2>
{msg.name}
</h2>




<p>
{msg.email}
</p>




<Message>

{msg.message}

</Message>







<Bottom>




<Status>

{
msg.status==="Replied"

?

<FaCheckCircle/>

:

null

}


{msg.status}


</Status>







<button

onClick={()=>remove(msg.id)}

>

<FaTrash/>

</button>



</Bottom>






</Card>


))


}





</Grid>







</Page>



)

}



export default Contacts;












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



`;








const Search=styled.div`


margin:30px 0;



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










const Grid=styled.div`


display:grid;



grid-template-columns:
repeat(3,1fr);



gap:30px;



@media(max-width:900px){

grid-template-columns:1fr;

}



`;









const Card=styled.div`


padding:35px;


border-radius:40px;




background:

rgba(255,255,255,.65);



backdrop-filter:blur(20px);




box-shadow:

0 25px 50px #0002;



p{

color:#78716c;

}



`;











const Icon=styled.div`


width:60px;


height:60px;



border-radius:20px;



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


font-size:25px;



`;









const Message=styled.div`


margin:20px 0;



padding:20px;



border-radius:25px;




background:white;



color:#57534e;



`;










const Bottom=styled.div`


display:flex;



justify-content:space-between;



align-items:center;



button{


border:none;


width:40px;


height:40px;


border-radius:50%;


background:#fee2e2;


color:#dc2626;



}



`;









const Status=styled.span`


padding:8px 18px;



border-radius:20px;



background:#dcfce7;



color:#15803d;



`;