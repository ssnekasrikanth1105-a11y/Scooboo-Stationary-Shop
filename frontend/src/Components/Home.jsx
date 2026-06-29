import React from "react";
import styled,{keyframes} from "styled-components";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

import {
FaBook,
FaPen,
FaPalette,
FaTruck,
FaStar,
FaQuoteLeft
} from "react-icons/fa";




function Home(){



const products=[


{
name:"Premium Notebook",
price:"₹199",
img:"https://images.unsplash.com/photo-1531346878377-a5be20888e57"
},


{
name:"Luxury Pens",
price:"₹149",
img:"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd"
},


{
name:"Art Kit",
price:"₹499",
img:"https://images.unsplash.com/photo-1513364776144-60967b0f800f"
}


];





return(


<Page>



<Floating className="one">
✏️
</Floating>


<Floating className="two">
📚
</Floating>


<Floating className="three">
🎨
</Floating>





<Hero

as={motion.div}

initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

>



<HeroContent>



<h1>

Create Your

<span>

Creative Space

</span>

</h1>



<p>

Premium stationery products
for students, creators and professionals.

</p>





<ButtonBox>


<Primary to="/shop">

Shop Now

</Primary>



<Secondary to="/collection">

View Collection

</Secondary>


</ButtonBox>




</HeroContent>









<HeroCard


as={motion.div}


animate={{

y:[0,-25,0],
rotate:[0,3,-3,0]

}}


transition={{

duration:5,
repeat:Infinity

}}


>


<div>

📒✏️

</div>


<h2>

Stationery Hub

</h2>


<p>

Write • Create • Inspire

</p>



</HeroCard>





</Hero>









<Title>

Explore Categories

</Title>







<CategoryGrid>



<Card

as={motion.div}

whileHover={{
scale:1.06,
y:-10
}}

>

<FaBook/>

<h3>

Notebooks

</h3>

<p>

Premium pages

</p>


</Card>







<Card

as={motion.div}

whileHover={{
scale:1.06,
y:-10
}}

>

<FaPen/>

<h3>

Pens

</h3>

<p>

Smooth writing

</p>


</Card>








<Card

as={motion.div}

whileHover={{
scale:1.06,
y:-10
}}

>


<FaPalette/>

<h3>

Art

</h3>

<p>

Creative tools

</p>


</Card>







<Card

as={motion.div}

whileHover={{
scale:1.06,
y:-10
}}

>


<FaTruck/>

<h3>

Delivery

</h3>

<p>

Fast shipping

</p>


</Card>



</CategoryGrid>









<Title>

Trending Products 🔥

</Title>






<ProductGrid>


{

products.map((p,i)=>(



<Product

key={i}


as={motion.div}


whileHover={{

scale:1.08,
y:-15

}}


transition={{

type:"spring"

}}



>


<img src={p.img}/>



<h2>

{p.name}

</h2>



<h3>

{p.price}

</h3>



<Buy to="/shop">

Buy Now

</Buy>



</Product>


))


}



</ProductGrid>












<About>


<div>


<h1>

Why Choose Us?

</h1>


<p>

We provide quality stationery
with beautiful designs and
premium materials.

</p>



<ul>

<li>
✔ Quality Products
</li>


<li>
✔ Affordable Price
</li>


<li>
✔ Fast Delivery
</li>


</ul>


</div>




<Emoji

as={motion.div}

animate={{

rotate:[0,10,-10,0],
y:[0,-20,0]

}}

transition={{

duration:4,
repeat:Infinity

}}

>

✨📒

</Emoji>




</About>











<Title>

Customer Reviews ⭐

</Title>








<Reviews>



<ReviewCard

as={motion.div}

whileHover={{

scale:1.05

}}

>


<FaQuoteLeft/>


<p>

"Beautiful products and amazing quality.
My study table looks better now."

</p>


<h3>

- Sneha

</h3>



<div>

⭐⭐⭐⭐⭐

</div>



</ReviewCard>







<ReviewCard

as={motion.div}

whileHover={{

scale:1.05

}}

>


<FaQuoteLeft/>


<p>

"Fast delivery and premium stationery.
Loved the collection."

</p>


<h3>

- Priya

</h3>



<div>

⭐⭐⭐⭐⭐

</div>



</ReviewCard>







<ReviewCard

as={motion.div}

whileHover={{

scale:1.05

}}

>


<FaQuoteLeft/>


<p>

"Perfect store for students and creators."

</p>


<h3>

- Rahul

</h3>



<div>

⭐⭐⭐⭐⭐

</div>



</ReviewCard>





</Reviews>










<Bottom>


<h1>

Make Your Desk Beautiful ✨

</h1>


<p>

Upgrade your workspace today.

</p>



<Link to="/shop">

Explore Products

</Link>



</Bottom>







</Page>


)

}


export default Home;












// ================= ANIMATION =================


const float = keyframes`

0%{
transform:translateY(0);
}

50%{
transform:translateY(-25px);
}

100%{
transform:translateY(0);
}

`;



const gradient = keyframes`

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









// ================= STYLE =================




const Page=styled.div`

position:relative;

overflow:hidden;


padding:60px 8%;


min-height:100vh;



background:

linear-gradient(
135deg,
#fff7ed,
#fed7aa,
#fce7f3
);



background-size:300% 300%;


animation:${gradient} 12s infinite;


`;







const Hero=styled.div`

display:flex;

align-items:center;

justify-content:space-between;


min-height:70vh;


gap:60px;



@media(max-width:850px){

flex-direction:column;

}

`;








const HeroContent=styled.div`

max-width:650px;



h1{

font-size:70px;

color:#7c2d12;

}



span{

display:block;

color:#ea580c;

}



p{

font-size:20px;

color:#57534e;

}



`;








const ButtonBox=styled.div`

margin-top:35px;


display:flex;

gap:20px;


flex-wrap:wrap;


`;








const Primary=styled(Link)`

padding:15px 35px;

border-radius:30px;


background:#ea580c;


color:white;


text-decoration:none;


`;





const Secondary=styled(Link)`

padding:15px 35px;


border-radius:30px;


background:white;


color:#ea580c;


text-decoration:none;


`;










const HeroCard=styled.div`

width:340px;

height:340px;


border-radius:60px;


background:#ffffff99;



backdrop-filter:blur(25px);


display:flex;

flex-direction:column;


align-items:center;


justify-content:center;


box-shadow:0 30px 70px #0002;



div{

font-size:90px;

}



`;










const Title=styled.h1`

text-align:center;

margin:70px 0 35px;

color:#7c2d12;


`;








const CategoryGrid=styled.div`

display:grid;

grid-template-columns:repeat(4,1fr);

gap:25px;



@media(max-width:850px){

grid-template-columns:1fr;

}



`;










const Card=styled.div`

padding:35px;


border-radius:35px;


background:#ffffff99;


backdrop-filter:blur(20px);



text-align:center;



font-size:35px;


color:#ea580c;


h3{

color:#57534e;

}



`;








const ProductGrid=styled.div`

display:grid;


grid-template-columns:repeat(3,1fr);


gap:30px;



@media(max-width:850px){

grid-template-columns:1fr;

}


`;








const Product=styled.div`

padding:20px;


border-radius:35px;


background:#ffffffaa;


text-align:center;



img{

width:100%;


height:230px;


object-fit:cover;


border-radius:25px;


}


`;









const Buy=styled(Link)`

display:inline-block;


padding:12px 28px;


background:#ea580c;


color:white;


border-radius:25px;


text-decoration:none;



`;








const About=styled.div`

margin-top:80px;


padding:50px;


border-radius:50px;


background:#ffffff99;



display:flex;


justify-content:space-between;



align-items:center;



@media(max-width:850px){

flex-direction:column;

}


`;







const Emoji=styled.div`

font-size:100px;


`;









const Reviews=styled.div`

display:grid;


grid-template-columns:repeat(3,1fr);


gap:25px;



@media(max-width:850px){

grid-template-columns:1fr;

}



`;









const ReviewCard=styled.div`

padding:35px;


border-radius:35px;


background:#ffffffaa;



text-align:center;



svg{

font-size:35px;

color:#ea580c;

}


`;








const Bottom=styled.div`

margin-top:70px;


padding:60px;


border-radius:50px;


background:#ffffffaa;


text-align:center;



a{

display:inline-block;


margin-top:20px;


padding:15px 35px;


background:#ea580c;


color:white;


border-radius:30px;


text-decoration:none;


}


`;








const Floating=styled.div`

position:absolute;


font-size:70px;


animation:${float} 5s infinite;


&.one{

left:5%;

top:20%;

}


&.two{

right:8%;

top:30%;

}


&.three{

right:15%;

bottom:20%;

}



`;