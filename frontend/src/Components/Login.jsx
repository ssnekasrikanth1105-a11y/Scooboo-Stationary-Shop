import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";


function Login(){


const navigate = useNavigate();


const [showPassword,setShowPassword] = useState(false);


const [form,setForm] = useState({

email:"",
password:""

});



const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value


});


};





const handleSubmit=(e)=>{


e.preventDefault();


console.log(form);


// after login

navigate("/");


};





return(


<Page>



<CircleOne/>
<CircleTwo/>
<CircleThree/>





<FloatingOne>
✨
</FloatingOne>



<FloatingTwo>
✒️
</FloatingTwo>





<LoginCard

as={motion.div}


initial={{
opacity:0,
y:80,
scale:.8
}}


animate={{
opacity:1,
y:0,
scale:1
}}


transition={{
duration:.8
}}



>




<Logo>

✦ SCOOBOO

</Logo>




<Title>
Welcome Back
</Title>



<Sub>
Login to continue your shopping
</Sub>






<form onSubmit={handleSubmit}>


<Input>


<span>
📧
</span>


<input

type="email"

name="email"

placeholder="Email Address"

value={form.email}

onChange={handleChange}

/>


</Input>







<Input>


<span>
🔒
</span>


<input

type={showPassword?"text":"password"}

name="password"

placeholder="Password"

value={form.password}

onChange={handleChange}

/>



<Eye

type="button"

onClick={()=>setShowPassword(!showPassword)}

>

{showPassword?"🙈":"👁"}

</Eye>



</Input>








<LoginBtn>

Login

</LoginBtn>





</form>








<Bottom>


<p>
Don't have an account?
</p>


<Link to="/register">

Create Account

</Link>



</Bottom>







</LoginCard>





</Page>


)

}


export default Login;









// ================= STYLE =================



const Page = styled.div`


height:100vh;


display:flex;


justify-content:center;


align-items:center;


overflow:hidden;


position:relative;



background:


linear-gradient(
135deg,
#dbeafe,
#f5d0fe,
#ccfbf1
);



background-size:300% 300%;


animation:bg 12s infinite;



@keyframes bg{


0%{
background-position:0% 50%;
}


50%{
background-position:100% 50%;
}


100%{
background-position:0% 50%;
}



}



`;








const CircleOne = styled.div`


position:absolute;


width:500px;

height:500px;


background:#8b5cf6;


border-radius:50%;


filter:blur(120px);



top:-200px;

left:-200px;



`;







const CircleTwo = styled.div`


position:absolute;


width:450px;

height:450px;


background:#ec4899;


border-radius:50%;


filter:blur(120px);



right:-150px;

bottom:-150px;



`;








const CircleThree = styled.div`


position:absolute;


width:300px;

height:300px;


background:#06b6d4;


border-radius:50%;


filter:blur(100px);



left:40%;

top:30%;



`;









const FloatingOne = styled.div`


position:absolute;


font-size:90px;


top:100px;


right:180px;


animation:float 5s infinite;



@keyframes float{


50%{

transform:translateY(-40px) rotate(20deg);

}



}



`;







const FloatingTwo = styled.div`


position:absolute;


font-size:80px;


bottom:100px;


left:150px;



animation:float 6s infinite;



`;










const LoginCard = styled.div`


width:420px;


padding:45px;


border-radius:40px;



background:


rgba(255,255,255,.55);



backdrop-filter:blur(25px);



box-shadow:


0 30px 80px #0003;



z-index:2;



@media(max-width:600px){

width:90%;

}



`;









const Logo = styled.h2`


text-align:center;


font-size:30px;


color:#7c3aed;



`;









const Title = styled.h1`


text-align:center;


color:#312e81;



`;








const Sub = styled.p`


text-align:center;


color:#64748b;


`;









const Input = styled.div`


display:flex;


align-items:center;


background:white;


padding:12px 18px;


border-radius:30px;


margin:20px 0;


position:relative;



input{


border:none;


outline:none;


width:100%;


font-size:16px;



}



`;







const Eye = styled.button`


position:absolute;


right:15px;


border:none;


background:none;


cursor:pointer;


`;









const LoginBtn = styled.button`


width:100%;


padding:16px;


border:none;


border-radius:30px;



background:


linear-gradient(
90deg,
#8b5cf6,
#ec4899
);



color:white;


font-size:18px;


cursor:pointer;



transition:.3s;



&:hover{


transform:scale(1.05);


}



`;









const Bottom = styled.div`


text-align:center;


margin-top:25px;



a{


text-decoration:none;


color:#7c3aed;


font-weight:bold;


}



`;