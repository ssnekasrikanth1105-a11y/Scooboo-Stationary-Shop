import React, {useState} from "react";
import styled from "styled-components";
import {toast} from "react-toastify";


function Newsletter(){


const [email,setEmail]=useState("");



const subscribe=(e)=>{

e.preventDefault();


if(!email){

toast.error("Enter your email");

return;

}


toast.success("Subscribed Successfully 🎉");

setEmail("");

};




return(

<Section>


<Content>


<Icon>
📩
</Icon>



<h1>
Subscribe To Our Newsletter
</h1>



<p>

Get latest stationery updates,
new arrivals and exclusive offers.

</p>





<Form onSubmit={subscribe}>


<Input

type="email"

placeholder="Enter your email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>




<Button>
Subscribe
</Button>



</Form>




</Content>


</Section>


)

}


export default Newsletter;





const Section=styled.section`

margin:70px 40px;

padding:60px 30px;

border-radius:35px;


background:

linear-gradient(
135deg,
#8b5cf6,
#06b6d4
);


color:white;


`;





const Content=styled.div`

text-align:center;

max-width:700px;

margin:auto;


h1{

font-size:40px;

}



p{

font-size:18px;

opacity:.9;

}


`;





const Icon=styled.div`

font-size:60px;

`;





const Form=styled.form`

display:flex;

justify-content:center;

gap:15px;

margin-top:30px;



@media(max-width:600px){

flex-direction:column;

}

`;





const Input=styled.input`

padding:16px 20px;

width:300px;


border-radius:30px;

border:none;

outline:none;


font-size:16px;


`;





const Button=styled.button`

padding:16px 30px;

border:none;

border-radius:30px;


background:white;


color:#7c3aed;


font-weight:bold;


cursor:pointer;


`;