import React from "react";
import styled,{keyframes} from "styled-components";
import {Link} from "react-router-dom";



function NotFound(){


return(


<Page>



<Card>


<Number>
404
</Number>



<h1>
Oops! Page Not Found
</h1>



<p>
The page you are looking for doesn't exist.
</p>



<Link to="/">


<button>
Go Home
</button>


</Link>



</Card>



</Page>


)

}


export default NotFound;









// ================= STYLE =================



const float=keyframes`

0%,100%{
transform:translateY(0);
}

50%{
transform:translateY(-20px);
}


`;




const Page=styled.div`


height:100vh;


display:flex;


align-items:center;


justify-content:center;




background:

linear-gradient(
135deg,
#fff7ed,
#fef3c7,
#fae8ff
);



`;







const Card=styled.div`


width:450px;


padding:60px;



text-align:center;



border-radius:45px;



background:

rgba(255,255,255,.6);



backdrop-filter:blur(20px);



box-shadow:

0 30px 60px #0002;



animation:${float} 5s infinite;



h1{

color:#78350f;

}



p{

color:#57534e;

}




button{


margin-top:25px;


padding:15px 35px;


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



}



`;








const Number=styled.h1`


font-size:100px;



margin:0;



color:#d97706;



`;