import React,{useState} from "react";
import styled from "styled-components";
import {
Outlet,
NavLink,
useNavigate
}
from "react-router-dom";


import {
FaHome,
FaBox,
FaUsers,
FaShoppingCart,
FaEnvelope,
FaBars,
FaTimes,
FaSignOutAlt
}
from "react-icons/fa";





function AdminLayout(){



const [open,setOpen]=useState(false);


const navigate=useNavigate();




const logout=()=>{


localStorage.removeItem("adminAuth");


navigate("/admin-login");


};






return(



<Wrapper>





<MobileButton

onClick={()=>setOpen(!open)}

>

{
open?

<FaTimes/>

:

<FaBars/>

}

</MobileButton>









<Sidebar open={open}>




<Logo>

SCOOBOO Admin ✨

</Logo>







<Menu>





<LinkItem

to="/admin"

end

>


<FaHome/>

Dashboard


</LinkItem>







<LinkItem

to="/admin/products"

>


<FaBox/>

Products


</LinkItem>







<LinkItem

to="/admin/orders"

>


<FaShoppingCart/>

Orders


</LinkItem>








<LinkItem

to="/admin/customers"

>


<FaUsers/>

Customers


</LinkItem>








<LinkItem

to="/admin/contacts"

>


<FaEnvelope/>

Contacts


</LinkItem>





</Menu>









<Logout

onClick={logout}

>


<FaSignOutAlt/>

Logout


</Logout>







</Sidebar>









<Content>


<Outlet/>

</Content>







</Wrapper>


)


}



export default AdminLayout;











// STYLE



const Wrapper=styled.div`


min-height:100vh;


display:flex;



background:

linear-gradient(
135deg,
#fff7ed,
#fef3c7,
#fae8ff
);



`;









const Sidebar=styled.aside`



width:260px;


height:100vh;


position:fixed;



padding:30px;



background:

rgba(255,255,255,.65);



backdrop-filter:blur(25px);



box-shadow:

0 20px 50px #0002;



z-index:1000;



transition:.3s;




@media(max-width:900px){


left:${p=>p.open?"0":"-300px"};


}



`;









const Logo=styled.h1`


color:#92400e;


margin-bottom:50px;


font-size:28px;



`;









const Menu=styled.div`


display:flex;


flex-direction:column;


gap:18px;



`;









const LinkItem=styled(NavLink)`



display:flex;


align-items:center;



gap:15px;



padding:15px;



border-radius:25px;



text-decoration:none;



color:#57534e;



transition:.3s;



&.active{


background:


linear-gradient(
90deg,
#d97706,
#ec4899
);



color:white;


}



&:hover{


transform:translateX(8px);


background:#fff;



}



`;









const Logout=styled.button`



position:absolute;


bottom:40px;



width:80%;



padding:15px;



border:none;



border-radius:30px;



display:flex;


justify-content:center;


align-items:center;



gap:10px;



background:#fee2e2;



color:#dc2626;



cursor:pointer;



`;









const Content=styled.main`



margin-left:260px;


width:100%;



padding:30px;




@media(max-width:900px){


margin-left:0;


}



`;








const MobileButton=styled.button`



display:none;


position:fixed;


top:20px;


left:20px;



z-index:2000;



width:45px;


height:45px;



border:none;



border-radius:50%;



background:#d97706;



color:white;




@media(max-width:900px){


display:block;


}



`;