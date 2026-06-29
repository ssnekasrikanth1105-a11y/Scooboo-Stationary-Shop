import React from "react";
import styled, { keyframes } from "styled-components";

import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaHeart,
  FaPenNib,
  FaBookOpen,
  FaPaperPlane
} from "react-icons/fa";



function Footer(){


return(


<FooterContainer>



<Floating className="pen">
<FaPenNib/>
</Floating>



<Floating className="book">
<FaBookOpen/>
</Floating>







<Newsletter>



<div>

<h1>
Stay Creative ✨
</h1>


<p>
Subscribe for latest stationery updates,
new arrivals and offers.
</p>


</div>






<NewsForm>


<input

type="email"

placeholder="Enter your email"

/>


<button>

<FaPaperPlane/>

Subscribe

</button>


</NewsForm>




</Newsletter>









<FooterGrid>






<Brand>



<h2>

SCOOBOO

</h2>



<p>

Premium stationery store for
students, artists and creators.

</p>




<div className="social">


<FaInstagram/>

<FaFacebook/>

<FaTwitter/>


</div>



</Brand>









<Column>


<h3>

Quick Links

</h3>


<a href="/">
Home
</a>


<a href="/shop">
Shop
</a>


<a href="/collection">
Collections
</a>


<a href="/contact">
Contact
</a>


</Column>









<Column>


<h3>

Categories

</h3>


<a>
Notebooks
</a>


<a>
Pens
</a>


<a>
Art Supplies
</a>


<a>
Study Kits
</a>


</Column>









<Column>


<h3>

Support

</h3>


<a>
Privacy Policy
</a>


<a>
Terms
</a>


<a>
Help
</a>



</Column>






</FooterGrid>










<Bottom>


<p>

© 2026 NoteNest. All Rights Reserved.

</p>


<p>

Made with 

<FaHeart/>

 for creators

</p>



</Bottom>






</FooterContainer>



)

}



export default Footer;









// ================= ANIMATIONS =================



const moveBg = keyframes`

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






const float = keyframes`

0%{

transform:translateY(0px);

}


50%{

transform:translateY(-25px);

}


100%{

transform:translateY(0px);

}


`;







const shine = keyframes`

0%{

left:-100%;

}


100%{

left:100%;

}

`;











// ================= STYLE =================





const FooterContainer = styled.footer`


position:relative;


overflow:hidden;


padding:70px 8% 30px;



background:


linear-gradient(
135deg,
#fff7ed,
#fed7aa,
#fce7f3
);



background-size:300% 300%;



animation:${moveBg} 10s infinite;



`;









const Newsletter = styled.div`


position:relative;


z-index:2;


padding:45px;



border-radius:45px;



background:

rgba(255,255,255,.55);



backdrop-filter:blur(25px);



display:flex;


align-items:center;


justify-content:space-between;



gap:30px;



box-shadow:

0 25px 60px rgba(0,0,0,.15);



overflow:hidden;



&:hover::after{


content:"";


position:absolute;


top:0;


left:-100%;


width:100%;


height:100%;


background:

linear-gradient(
90deg,
transparent,
#ffffff99,
transparent
);



animation:${shine} .8s;



}



@media(max-width:800px){


flex-direction:column;


}



h1{

color:#7c2d12;

}



p{

color:#57534e;

}



`;









const NewsForm = styled.div`


display:flex;


gap:15px;



@media(max-width:600px){


flex-direction:column;


}



input{


padding:16px 25px;


border:none;


outline:none;


border-radius:30px;


}



button{


border:none;


padding:16px 30px;


border-radius:30px;


background:#ea580c;


color:white;


display:flex;


gap:10px;


align-items:center;


cursor:pointer;



}


`;









const FooterGrid = styled.div`


margin-top:70px;


display:grid;


grid-template-columns:2fr 1fr 1fr 1fr;


gap:40px;



@media(max-width:850px){


grid-template-columns:1fr;


}


`;









const Brand = styled.div`


h2{


font-size:45px;


color:#ea580c;


}



p{


color:#57534e;


line-height:1.6;


}



.social{


display:flex;


gap:20px;


margin-top:25px;



svg{


font-size:28px;


color:#ea580c;


animation:${float} 4s infinite;


}



}


`;









const Column = styled.div`


h3{

color:#7c2d12;

}



a{


display:block;


margin:15px 0;


color:#57534e;


text-decoration:none;


transition:.3s;


cursor:pointer;



&:hover{


color:#ea580c;


transform:translateX(8px);


}


}



`;









const Bottom = styled.div`


margin-top:50px;


padding-top:25px;



border-top:

1px solid #ffffff88;



display:flex;


justify-content:space-between;



color:#57534e;



@media(max-width:700px){


flex-direction:column;


gap:15px;


}



svg{

color:red;


}


`;









const Floating = styled.div`


position:absolute;


font-size:90px;


color:#ea580c;


opacity:.25;



animation:${float} 5s infinite;



&.pen{

left:5%;

top:25%;

}



&.book{

right:5%;

bottom:20%;

animation-delay:2s;

}



`;