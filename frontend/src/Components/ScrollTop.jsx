import React,{useEffect,useState} from "react";
import styled from "styled-components";
import {FaArrowUp} from "react-icons/fa";



function ScrollTop(){


const [show,setShow]=useState(false);



useEffect(()=>{


const check=()=>{


if(window.scrollY>300)

setShow(true);

else

setShow(false);



};



window.addEventListener(
"scroll",
check
);



return()=>window.removeEventListener(
"scroll",
check
);



},[]);






const top=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};





return(


<>

{
show &&

<Button onClick={top}>


<FaArrowUp/>


</Button>

}



</>


)

}



export default ScrollTop;









const Button=styled.button`


position:fixed;



right:30px;


bottom:30px;



width:55px;


height:55px;



border:none;



border-radius:50%;





background:

linear-gradient(
135deg,
#d97706,
#ec4899
);



color:white;



font-size:20px;



cursor:pointer;



z-index:999;



box-shadow:

0 15px 35px #0003;



transition:.3s;




&:hover{


transform:translateY(-8px);



}



`;