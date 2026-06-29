import React,{useContext,useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

import {
FaMapMarkerAlt,
FaCreditCard,
FaCheckCircle
} from "react-icons/fa";


import {CartContext} from "../context/CartContext";





function Checkout(){



const navigate=useNavigate();



const {cart=[]}=useContext(CartContext);





const [payment,setPayment]=useState("COD");





const [form,setForm]=useState({

name:"",
phone:"",
address:"",
city:"",
pincode:""

});






const total=cart.reduce(

(sum,item)=>

sum+

Number(item.price)*Number(item.qty||1)

,0

);








const change=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};









const placeOrder=(e)=>{


e.preventDefault();



navigate("/success");



};









return(



<Page>




<Title>

Checkout ✨

</Title>








<Container>






<FormBox


as={motion.div}


initial={{

opacity:0,

x:-50

}}



animate={{

opacity:1,

x:0

}}


>





<h2>

<FaMapMarkerAlt/>

 Delivery Details

</h2>







<form onSubmit={placeOrder}>


<Input

name="name"

placeholder="Full Name"

onChange={change}

/>





<Input

name="phone"

placeholder="Phone Number"

onChange={change}

/>





<Input

name="address"

placeholder="Address"

onChange={change}

/>






<Input

name="city"

placeholder="City"

onChange={change}

/>






<Input

name="pincode"

placeholder="Pincode"

onChange={change}

/>








<h2>

<FaCreditCard/>

 Payment

</h2>






<Select

value={payment}

onChange={
e=>setPayment(e.target.value)
}

>


<option>

COD

</option>



<option>

UPI

</option>



<option>

Card Payment

</option>



</Select>









<Button>


<FaCheckCircle/>

Place Order


</Button>





</form>







</FormBox>











<Summary


as={motion.div}


initial={{

opacity:0,

x:50

}}


animate={{

opacity:1,

x:0

}}



>




<h2>

Order Summary

</h2>






{

cart.map(item=>(


<Item key={item.id}>


<img src={item.img}/>



<div>

<h3>

{item.name}

</h3>


<p>

Qty : {item.qty}

</p>


</div>



<b>

₹{item.price*item.qty}

</b>



</Item>



))

}








<Total>


<span>

Total

</span>



<b>

₹{total}

</b>



</Total>





</Summary>









</Container>





</Page>



)

}



export default Checkout;

const Page=styled.div`


min-height:100vh;


padding:60px;



background:

linear-gradient(
135deg,
#fff7ed,
#fce7f3,
#fef3c7
);



`;







const Title=styled.h1`


text-align:center;


color:#9d174d;


margin-bottom:50px;



`;









const Container=styled.div`


width:90%;


margin:auto;



display:grid;


grid-template-columns:2fr 1fr;


gap:35px;



@media(max-width:900px){


grid-template-columns:1fr;


}



`;










const FormBox=styled.div`


padding:35px;


border-radius:35px;



background:

rgba(255,255,255,.65);



backdrop-filter:blur(20px);



box-shadow:0 20px 50px #0002;




h2{


color:#9d174d;


display:flex;


gap:10px;


align-items:center;


}


`;









const Input=styled.input`


width:100%;


padding:15px;


margin:10px 0;



border:none;


outline:none;



border-radius:25px;



background:white;



box-shadow:0 5px 20px #0001;



`;








const Select=styled.select`


width:100%;


padding:15px;



border:none;


border-radius:25px;



background:white;



`;








const Button=styled.button`


margin-top:25px;


width:100%;


padding:16px;



border:none;



border-radius:30px;



background:

linear-gradient(
90deg,
#d97706,
#ec4899
);



color:white;



font-size:18px;



cursor:pointer;



display:flex;


justify-content:center;


align-items:center;


gap:10px;



`;









const Summary=styled.div`


padding:30px;


height:max-content;



border-radius:35px;




background:

rgba(255,255,255,.7);



backdrop-filter:blur(20px);



box-shadow:0 20px 50px #0002;



h2{

color:#92400e;

}



`;









const Item=styled.div`


display:flex;


align-items:center;


gap:15px;



margin:15px 0;



img{


width:60px;


height:60px;


object-fit:cover;


border-radius:15px;


}



`;









const Total=styled.div`


margin-top:25px;


padding-top:20px;



border-top:1px solid #ddd;



display:flex;


justify-content:space-between;



font-size:22px;



b{

color:#ec4899;

}



`;