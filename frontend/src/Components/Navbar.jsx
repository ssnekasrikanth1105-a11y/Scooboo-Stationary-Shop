import React,{useState,useContext} from "react";
import styled,{keyframes} from "styled-components";
import {NavLink} from "react-router-dom";

import {
FaBars,
FaTimes,
FaShoppingCart,
FaHeart,
FaUser,
FaThLarge
} from "react-icons/fa";


import {CartContext} from "../context/CartContext";
import {WishlistContext} from "../context/WishlistContext";




function Navbar(){


const [open,setOpen]=useState(false);



const {cart=[]}=useContext(CartContext);

const {wishlist=[]}=useContext(WishlistContext);




const closeMenu=()=>{

setOpen(false);

};







return(


<Container>



<Nav>





<Logo

to="/"

onClick={closeMenu}

>


<div>

📓

</div>


SCOOBOO


</Logo>









<Links open={open}>


<Item 
to="/"
onClick={closeMenu}
>

Home

</Item>





<Item 
to="/shop"
onClick={closeMenu}
>

Shop

</Item>







<Item 
to="/collection"
onClick={closeMenu}
>

Collection

</Item>







<Item 
to="/deals"
onClick={closeMenu}
>

Deals

</Item>







<Item 
to="/contact"
onClick={closeMenu}
>

Contact

</Item>







<Item 
to="/login"
onClick={closeMenu}
>

Login

</Item>







<Item 
to="/admin"
onClick={closeMenu}
>


<FaThLarge/>


Dashboard


</Item>






</Links>









<Actions>






<Icon to="/wishlist">


<FaHeart/>


{

wishlist.length>0 &&

<Badge>

{wishlist.length}

</Badge>

}


</Icon>









<Icon to="/cart">


<FaShoppingCart/>


{

cart.length>0 &&

<Badge>

{cart.length}

</Badge>

}



</Icon>









<Icon to="/profile">


<FaUser/>

</Icon>






</Actions>







<Menu

onClick={()=>setOpen(!open)}

>


{

open ?

<FaTimes/>

:

<FaBars/>

}



</Menu>






</Nav>



</Container>


)

}



export default Navbar;









// ================= ANIMATION =================



const glow=keyframes`


0%{

box-shadow:
0 0 0 #fb923c;

}



50%{


box-shadow:
0 0 40px #fb923c77;


}



100%{


box-shadow:
0 0 0 #fb923c;


}


`;





const pulse=keyframes`


0%{

transform:scale(1);

}


50%{

transform:scale(1.3);

}


100%{

transform:scale(1);

}



`;









// ================= STYLE =================






const Container=styled.div`

position:sticky;

top:15px;

z-index:999;

padding:15px 0;


`;









const Nav=styled.nav`


width:90%;


height:78px;


margin:auto;



display:flex;


align-items:center;


justify-content:space-between;



padding:0 35px;




border-radius:40px;




background:

linear-gradient(

135deg,

rgba(255,255,255,.75),

rgba(255,247,237,.75)

);




backdrop-filter:blur(20px);



border:1px solid #fed7aa;



animation:${glow} 4s infinite;



`;











const Logo=styled(NavLink)`


text-decoration:none;


display:flex;


align-items:center;



gap:12px;



font-size:26px;


font-weight:700;



color:#7c2d12;




div{

font-size:35px;

}



`;









const Links=styled.div`


display:flex;


gap:22px;




@media(max-width:850px){


position:absolute;



top:90px;



left:5%;



width:90%;



padding:25px;



border-radius:30px;



background:white;



flex-direction:column;



align-items:center;



display:${p=>p.open?"flex":"none"};



}



`;









const Item=styled(NavLink)`


text-decoration:none;



color:#57534e;



font-weight:600;



display:flex;



align-items:center;



gap:7px;




position:relative;



transition:.3s;





&:after{


content:"";


position:absolute;



bottom:-8px;


left:0;



height:3px;



width:0;



background:#f97316;



border-radius:20px;



transition:.3s;



}







&:hover{


color:#ea580c;


transform:translateY(-3px);


}




&:hover:after,

&.active:after{


width:100%;


}




&.active{


color:#ea580c;


}




`;













const Actions=styled.div`


display:flex;


gap:12px;




@media(max-width:850px){


display:none;


}


`;













const Icon=styled(NavLink)`



position:relative;



width:44px;


height:44px;



border-radius:50%;



display:flex;



align-items:center;



justify-content:center;





background:white;



color:#9a3412;



text-decoration:none;




transition:.3s;





&:hover{


transform:translateY(-6px) scale(1.1);



background:#ffedd5;


}



`;












const Badge=styled.span`



position:absolute;



top:-5px;


right:-5px;





width:22px;


height:22px;




border-radius:50%;



background:#ef4444;



color:white;



font-size:12px;



font-weight:bold;



display:flex;



align-items:center;



justify-content:center;




animation:${pulse} 1.5s infinite;



`;









const Menu=styled.button`


display:none;



width:45px;


height:45px;



border:none;



border-radius:50%;



background:#ea580c;



color:white;



cursor:pointer;





@media(max-width:850px){


display:block;


}


`;