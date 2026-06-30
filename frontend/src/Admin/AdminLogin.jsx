import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";



function AdminLogin(){


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");



const navigate=useNavigate();





const login=(e)=>{


e.preventDefault();



if(
email==="admin@gmail.com"
&&
password==="admin123"

){



localStorage.setItem(
"adminAuth",
"true"
);



navigate("/admin");



}

else{


alert("Invalid Admin Login");


}


};






return(


<Page>


<Card>


<h1>
Admin Login 🔐
</h1>



<form onSubmit={login}>


<Input

type="email"

placeholder="Email"

value={email}

onChange={
e=>setEmail(e.target.value)
}


/>





<Input

type="password"

placeholder="Password"

value={password}

onChange={
e=>setPassword(e.target.value)
}


/>





<Button>

Login

</Button>





</form>



</Card>



</Page>


)


}



export default AdminLogin;









const Page=styled.div`


height:100vh;


display:flex;


justify-content:center;


align-items:center;



background:

linear-gradient(
135deg,
#fff7ed,
#fef3c7,
#fae8ff
);



`;







const Card=styled.div`


width:400px;


padding:40px;


border-radius:35px;



background:

rgba(255,255,255,.65);



backdrop-filter:blur(20px);



box-shadow:0 20px 50px #0002;



text-align:center;



h1{

color:#78350f;

}



`;









const Input=styled.input`


width:100%;


padding:15px;


margin:12px 0;


border:none;


outline:none;



border-radius:25px;



`;









const Button=styled.button`


width:100%;


padding:15px;


border:none;


border-radius:30px;



background:

linear-gradient(
90deg,
#d97706,
#ec4899
);



color:white;


cursor:pointer;


font-size:16px;


`;