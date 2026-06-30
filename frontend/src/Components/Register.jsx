import React,{useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {Link,useNavigate} from "react-router-dom";



function Register(){


const navigate = useNavigate();


const [show,setShow] = useState(false);



const [form,setForm]=useState({

name:"",
email:"",
password:""

});



const change=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};





const submit=(e)=>{

e.preventDefault();


console.log(form);


// after register

navigate("/login");


};




return(


<Page>


<GlowOne/>
<GlowTwo/>
<GlowThree/>


<Floating>
✨
</Floating>


<FloatingPen>
🖊️
</FloatingPen>





<Card


as={motion.div}


initial={{
opacity:0,
scale:.8,
y:80
}}


animate={{
opacity:1,
scale:1,
y:0
}}


transition={{
duration:.8
}}



>



<Logo>

✦ SCOOBOO

</Logo>




<h1>
Create Account
</h1>



<p>
Join our premium stationery world
</p>







<form onSubmit={submit}>


<Input>


<span>
👤
</span>


<input

name="name"

placeholder="Full Name"

value={form.name}

onChange={change}


/>


</Input>








<Input>


<span>
📧
</span>


<input

name="email"

type="email"

placeholder="Email Address"

value={form.email}

onChange={change}


/>


</Input>









<Input>


<span>
🔒
</span>



<input


name="password"


type={show?"text":"password"}


placeholder="Password"


value={form.password}


onChange={change}


/>



<Eye

type="button"

onClick={()=>setShow(!show)}

>

{show?"🙈":"👁"}

</Eye>



</Input>








<Button>

Create Account

</Button>






</form>






<Bottom>


<p>
Already have account?
</p>



<Link to="/login">

Login

</Link>



</Bottom>






</Card>





</Page>


)

}


export default Register;











// ================= STYLE =================



const Page=styled.div`


height:100vh;


display:flex;


justify-content:center;


align-items:center;


overflow:hidden;


position:relative;



background:


linear-gradient(
135deg,
#ddd6fe,
#fbcfe8,
#bae6fd
);



background-size:300% 300%;



animation:bg 12s infinite;



@keyframes bg{


50%{

background-position:100% 50%;

}


}




`;










const GlowOne=styled.div`

position:absolute;


width:500px;


height:500px;


background:#8b5cf6;


border-radius:50%;


filter:blur(130px);


left:-200px;


top:-150px;


`;






const GlowTwo=styled.div`

position:absolute;


width:450px;


height:450px;


background:#ec4899;


border-radius:50%;


filter:blur(120px);


right:-150px;


bottom:-150px;



`;







const GlowThree=styled.div`

position:absolute;


width:300px;


height:300px;


background:#06b6d4;


border-radius:50%;


filter:blur(100px);


left:45%;


top:40%;



`;










const Floating=styled.div`

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







const FloatingPen=styled.div`

position:absolute;


font-size:80px;


bottom:100px;


left:150px;



animation:float 6s infinite;



`;










const Card=styled.div`


width:430px;


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








const Logo=styled.h2`

text-align:center;


color:#7c3aed;


font-size:30px;



`;









const Input=styled.div`

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







const Eye=styled.button`

position:absolute;


right:15px;


border:none;


background:none;


cursor:pointer;



`;









const Button=styled.button`

width:100%;


padding:16px;


border:none;


border-radius:30px;



background:


linear-gradient(
90deg,
#6366f1,
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









const Bottom=styled.div`

text-align:center;


margin-top:25px;



a{

text-decoration:none;


color:#7c3aed;


font-weight:bold;


}



`;