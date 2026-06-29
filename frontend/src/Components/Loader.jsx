import React from "react";
import styled,{keyframes} from "styled-components";



function Loader(){


return(


<Container>


<Circle/>


<h2>
Inkora
</h2>


<p>
Loading creativity...
</p>


</Container>


)

}


export default Loader;









const rotate=keyframes`

100%{
transform:rotate(360deg);
}

`;



const Container=styled.div`


height:100vh;


display:flex;


flex-direction:column;


align-items:center;


justify-content:center;



background:

linear-gradient(
135deg,
#fff7ed,
#fef3c7
);



h2{

color:#78350f;

font-size:35px;


}



p{

color:#92400e;

}



`;





const Circle=styled.div`


width:80px;


height:80px;



border-radius:50%;



border:

8px solid #fed7aa;



border-top:

8px solid #d97706;



animation:${rotate} 1s linear infinite;



`;