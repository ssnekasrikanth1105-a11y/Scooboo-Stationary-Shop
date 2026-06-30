import styled from "styled-components";

function WhyChooseUs() {

const features = [

{
icon:"🚚",
title:"Fast Delivery",
desc:"Quick and safe delivery of all your stationery products."
},

{
icon:"⭐",
title:"Premium Quality",
desc:"High quality stationery products from trusted brands."
},

{
icon:"💰",
title:"Affordable Price",
desc:"Best products with budget friendly prices."
},

{
icon:"🔒",
title:"Secure Payment",
desc:"Safe and secure shopping experience."
},

{
icon:"🎁",
title:"Exclusive Offers",
desc:"Amazing discounts and special offers."
},

{
icon:"🤝",
title:"Customer Support",
desc:"Friendly support whenever you need help."
}

];


return (

<Section>


<Container>


<Heading>
Why Choose Us?
</Heading>


<SubHeading>
Making your stationery shopping easier and smarter
</SubHeading>



<CardContainer>


{
features.map((item,index)=>(

<Card key={index}>


<Icon>
{item.icon}
</Icon>


<CardTitle>
{item.title}
</CardTitle>


<Description>
{item.desc}
</Description>


</Card>

))
}


</CardContainer>



</Container>


</Section>

)

}


export default WhyChooseUs;



/* ================= STYLES ================= */


const Section = styled.section`

padding:80px 40px;

background:#f3f4f6;

/* min-height:600px; */

`;



const Container = styled.div`

max-width:1200px;

margin:auto;

background:

linear-gradient(
135deg,
#111827,
#1e3a8a,
#312e81
);


padding:80px ;


border-radius:35px;


box-shadow:

0 20px 50px rgba(0,0,0,.25);


`;



const Heading = styled.h1`

text-align:center;

font-size:45px;

color:white;

/* margin-bottom:15px; */


`;



const SubHeading = styled.p`

text-align:center;

color:#d1d5db;

font-size:18px;

margin-bottom:50px;


`;



const CardContainer = styled.div`

display:grid;

grid-template-columns:
repeat(3,1fr);

gap:30px;


@media(max-width:900px){

grid-template-columns:1fr;

}


`;



const Card = styled.div`

background:white;


padding:35px 25px;


border-radius:25px;


text-align:center;


border:2px solid #e5e7eb;


transition:.3s;


box-shadow:

0 10px 25px rgba(0,0,0,.15);



&:hover{

transform:translateY(-10px);


box-shadow:

0 20px 40px rgba(0,0,0,.25);


}


`;



const Icon = styled.div`

font-size:60px;

margin-bottom:20px;


`;



const CardTitle = styled.h2`

color:#2563eb;

font-size:24px;

margin-bottom:15px;


`;



const Description = styled.p`

color:#6b7280;

line-height:1.6;

font-size:16px;


`;