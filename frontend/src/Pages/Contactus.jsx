import React from "react";
import styled,{keyframes} from "styled-components";
import {motion} from "framer-motion";
import {
FaMapMarkerAlt,
FaPhone,
FaEnvelope,
FaInstagram
} from "react-icons/fa";



function Contact(){



return(


<Page>


<Glow1/>
<Glow2/>




<Header

as={motion.div}

initial={{
opacity:0,
y:-40
}}

animate={{
opacity:1,
y:0
}}

>


<h1>
Contact Us ✨
</h1>


<p>

We would love to hear from you.
Let's create something beautiful.

</p>


</Header>







<ContactBox>



<FormCard


as={motion.div}

whileHover={{
y:-10
}}

>



<h2>
Send Message 💌
</h2>



<input

placeholder="Your Name"

/>


<input

placeholder="Email"

/>



<input

placeholder="Subject"

/>




<textarea

placeholder="Your Message"

/>



<button>

Send Message ✨

</button>



</FormCard>








<InfoCard


as={motion.div}

whileHover={{
y:-10
}}

>



<h2>
Get In Touch
</h2>



<Item>

<FaMapMarkerAlt/>

<p>
India
</p>

</Item>



<Item>

<FaPhone/>

<p>
+91 9876543210
</p>

</Item>




<Item>

<FaEnvelope/>

<p>
hello@scooboo.com
</p>

</Item>




<Item>

<FaInstagram/>

<p>
@scooboo
</p>

</Item>




</InfoCard>




</ContactBox>









<Quote>



<h1>

"Your ideas deserve a beautiful place to begin."

</h1>



<p>

Write • Create • Inspire ✨

</p>


</Quote>





</Page>



)


}


export default Contact;









// ================= ANIMATION =================



const move=keyframes`

0%{
background-position:0% 50%;
}


50%{
background-position:100% 50%;
}


100%{
background-position:0% 50%;
}


`;




const float=keyframes`

0%,100%{

transform:translateY(0);

}


50%{

transform:translateY(-30px);

}

`;









// ================= STYLE =================





const Page=styled.div`


min-height:100vh;


padding:60px;



position:relative;


overflow:hidden;



background:


linear-gradient(
135deg,
#fff1f8,
#ede9fe,
#fffbeb
);



background-size:300% 300%;



animation:${move} 15s infinite;



`;










const Glow1=styled.div`


position:absolute;


width:400px;

height:400px;


background:#f9a8d4;


border-radius:50%;



filter:blur(130px);


top:-150px;


left:-120px;



animation:${float} 7s infinite;


`;









const Glow2=styled.div`


position:absolute;


width:350px;

height:350px;


background:#c4b5fd;



border-radius:50%;



filter:blur(130px);



bottom:-120px;


right:-100px;



animation:${float} 8s infinite;



`;









const Header=styled.div`


text-align:center;


position:relative;


z-index:2;



h1{


font-size:60px;


font-weight:500;


color:#7c3aed;


}



p{


font-size:20px;


color:#64748b;


}



@media(max-width:700px){


h1{

font-size:38px;

}



}



`;









const ContactBox=styled.div`


position:relative;


z-index:2;



margin-top:60px;



display:grid;



grid-template-columns:1fr 1fr;



gap:35px;



@media(max-width:800px){

grid-template-columns:1fr;

}



`;









const FormCard=styled.div`



background:

rgba(255,255,255,.55);



backdrop-filter:blur(20px);



padding:40px;


border-radius:40px;



box-shadow:

0 20px 50px #0002;



h2{

color:#9333ea;

font-weight:500;

}



input,textarea{


width:100%;


margin:12px 0;



padding:15px;


border:none;


border-radius:20px;


outline:none;



}



textarea{

height:120px;

}



button{


margin-top:15px;



padding:15px 35px;



border:none;


border-radius:30px;



background:

linear-gradient(
90deg,
#a855f7,
#ec4899
);



color:white;



cursor:pointer;



}



`;









const InfoCard=styled.div`


background:

rgba(255,255,255,.55);



backdrop-filter:blur(20px);



padding:40px;



border-radius:40px;



box-shadow:

0 20px 50px #0002;



h2{

color:#9333ea;

font-weight:500;

}



`;









const Item=styled.div`


display:flex;


align-items:center;


gap:20px;


margin:25px 0;



svg{


font-size:25px;


color:#ec4899;


}



p{

color:#64748b;

}



`;









const Quote=styled.div`


position:relative;


z-index:2;



margin-top:70px;



padding:60px;



border-radius:45px;



background:

rgba(255,255,255,.45);



backdrop-filter:blur(20px);



text-align:center;



h1{


font-size:40px;


font-weight:500;



color:#7c3aed;


}



p{

color:#ec4899;

}



@media(max-width:700px){

h1{

font-size:25px;

}

}



`;