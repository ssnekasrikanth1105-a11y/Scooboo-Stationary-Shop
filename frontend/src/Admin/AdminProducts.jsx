import React,{useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

import {
FaEdit,
FaTrash,
FaPlus
} from "react-icons/fa";




function AdminProducts(){



const [products,setProducts]=useState([


{
id:1,
name:"Premium Notebook",
price:299,
category:"Notebook",
image:"https://images.unsplash.com/photo-1531346878377-a5be20888e57"
},


{
id:2,
name:"Luxury Pen",
price:199,
category:"Pen",
image:"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd"
}


]);





const [form,setForm]=useState({

name:"",
price:"",
category:"",
image:""

});





const [edit,setEdit]=useState(null);

const [search,setSearch]=useState("");







const change=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value


});


};









const saveProduct=(e)=>{


e.preventDefault();




if(edit){



setProducts(

products.map(p=>

p.id===edit ?

{
...p,
...form,
price:Number(form.price)
}

:p

)


);



setEdit(null);



}

else{



setProducts([


...products,


{

id:Date.now(),

...form,

price:Number(form.price)

}


])


}





setForm({

name:"",
price:"",
category:"",
image:""

});



};









const deleteProduct=(id)=>{


setProducts(

products.filter(
p=>p.id!==id
)

);


};









const editProduct=(p)=>{


setEdit(p.id);



setForm(p);



};








const filtered=products.filter(p=>

p.name
.toLowerCase()
.includes(
search.toLowerCase()
)


);








return(



<Page>





<Title>

Admin Products 🛍️

</Title>







<Layout>





<Form

onSubmit={saveProduct}

>



<h2>

{

edit ?

"Update Product"

:

"Add Product"

}

</h2>






<Input

name="name"

placeholder="Product Name"

value={form.name}

onChange={change}

/>






<Input

name="price"

placeholder="Price"

value={form.price}

onChange={change}

/>






<Input

name="category"

placeholder="Category"

value={form.category}

onChange={change}

/>








<Input

name="image"

placeholder="Image URL"

value={form.image}

onChange={change}

/>






<Button>


<FaPlus/>


Save Product


</Button>





</Form>









<List>





<Search

placeholder="Search product..."

onChange={

e=>setSearch(e.target.value)

}

/>







{

filtered.map(product=>(



<Card

key={product.id}

as={motion.div}

whileHover={{

scale:1.03

}}

>




<img src={product.image}/>




<div>


<h2>

{product.name}

</h2>


<p>

₹{product.price}

</p>


<span>

{product.category}

</span>



</div>







<Actions>



<EditBtn

onClick={()=>editProduct(product)}

>

<FaEdit/>

</EditBtn>







<DeleteBtn

onClick={()=>deleteProduct(product.id)}

>

<FaTrash/>

</DeleteBtn>



</Actions>







</Card>



))


}







</List>







</Layout>






</Page>


)

}


export default AdminProducts;

const Page=styled.div`

padding:40px;


`;



const Title=styled.h1`

color:#92400e;


`;





const Layout=styled.div`

display:grid;

grid-template-columns:350px 1fr;

gap:30px;



@media(max-width:900px){

grid-template-columns:1fr;

}

`;






const Form=styled.form`

padding:30px;


border-radius:30px;



background:white;


box-shadow:0 20px 50px #0002;



`;







const Input=styled.input`

width:100%;

padding:15px;


margin:10px 0;


border:none;

border-radius:20px;


background:#fff7ed;


`;







const Button=styled.button`

width:100%;


padding:15px;


border:none;


border-radius:30px;


background:

linear-gradient(
90deg,
#d97706,
#ec4899
);



color:white;


display:flex;

justify-content:center;

gap:10px;


`;








const List=styled.div`


`;





const Search=styled.input`

width:100%;

padding:15px;

border-radius:30px;

border:none;

margin-bottom:20px;


`;








const Card=styled.div`

display:flex;


align-items:center;


gap:20px;



padding:20px;


margin-bottom:20px;



border-radius:30px;



background:white;



box-shadow:0 15px 40px #0002;




img{

width:100px;

height:100px;

object-fit:cover;

border-radius:20px;


}



`;







const Actions=styled.div`

margin-left:auto;

display:flex;

gap:10px;


`;








const EditBtn=styled.button`

width:45px;

height:45px;

border:none;

border-radius:50%;

background:#fde68a;

color:#92400e;


`;







const DeleteBtn=styled.button`

width:45px;

height:45px;

border:none;

border-radius:50%;

background:#fee2e2;

color:#dc2626;


`;