
import React from 'react'

// styled-components import cheyyunnu
// CSS React-il ezhuthan use cheyyum
import styled from 'styled-components'


/* =========================
   Styled Components
========================= */  


// Main container
// Full screen height edukunnu
// Background image set cheythittund
const Container = styled.div`
  min-height: 100vh;

  /* light background color */
  background: #f3f4f6;

  /* inside spacing */
  padding: 40px;

  /* background image */
  background: url("https://tse4.mm.bing.net/th/id/OIP.l1hbIvnyJQsdusNZv-0-qgHaDe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3");

  /* image repeat avathirikkan */
  background-repeat: no-repeat;

  /* full screen cover cheyyan */
  background-size: cover;
`;


// Main heading
const Title = styled.h1`
  /* text centeril */
  text-align: center;

  /* font size */
  font-size: 40px;

  /* bold text */
  font-weight: bold;

  /* text color */
  color: #1f2937;

  /* headinginte bottom spacing */
  margin-bottom: 40px;
`;


// Products/category cards arrange cheyyan grid
const Grid = styled.div`

  display: grid;

  /* 
     auto-fit = screen size anusarich adjust aavum
     minmax(250px,1fr) = minimum 250px width
  */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  /* gap between cards */
  gap: 30px;
`;


// Single Card Design
const Card = styled.div`

  /* card background */
  background: #9490538f;

  /* rounded corners */
  border-radius: 25px;

  /* image purath pokathirikkan */
  overflow: hidden;

  /* shadow */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);

  /* smooth transition */
  transition: 0.3s ease;

  /*
  Hover effect
  Uncomment cheythal card hover aavumbo move cheyyum

  &:hover {
    transform: translateY(-10px) scale(1.02);
  }
  */
`;


// Card image
const Image = styled.img`

  /* full width */
  width: 100%;

  /* fixed height */
  height: 250px;

  /* image stretch aakathirikkan */
  object-fit: cover;
`;


// Text content section
const Content = styled.div`

  padding: 20px;

  /* text center */
  text-align: center;
`;


// Category name
const CategoryName = styled.h2`

  font-size: 22px;

  font-weight: 600;

  color: #1c52a8;
`;




/* =========================
   Category Data Array
========================= */

// Ella category detailsum array-il store cheythittund
// name = category name
// image = category image

const categories = [
  {
    name: "Pens & Pencils",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db",
  },

  {
    name: "Notebooks",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
  },

  {
    name: "Art Supplies",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
  },

  {
    name: "Office Supplies",
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
  },

  {
    name: "Markers",
    image:
      "https://www.artsydee.com/wp-content/uploads/2023/05/8-2-2048x1517.jpg",
  },

  {
    name: "Highlighters",
    image:
      "https://m.media-amazon.com/images/I/61VdxCszDuL.jpg",
  },

  {
    name: "Sticky Notes",
    image:
      "https://images.unsplash.com/photo-1588072432904-843af37f03ed",
  },

  {
    name: "Files & Folders",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.M-g9Z9cGc992qZs8ww3K2AHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },

  {
    name: "Geometry Box",
    image:
      "https://rukminim1.flixcart.com/image/832/832/jrjizrk0/geometry-box/a/c/v/solution-mathematical-geometry-box-pack-of-2-size-lbh-7x3x1-inch-original-imafctkfxjfdzfv8.jpeg?q=70",
  },

  {
    name: "Craft Materials",
    image:
      "https://th.bing.com/th/id/OIP.-7cxxB2zs9RVcdwWpyyIdAHaK-?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  },

  {
    name: "School Bags",
    image:
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa",
  },

  {
    name: "Water Bottles",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
  },

];




/* =========================
   Main Component
========================= */

const Collections = () => {

  return (

    <Container>

      {/* Main Heading */}
      <Title>Stationery Categories</Title>


      {/* Grid Start */}
      <Grid>

        {/* 
           categories array loop cheyyunnu
           map use cheythu oro categoryum card aayi display cheyyum
        */}

        {categories.map((category, index) => (

          // Single card
          <Card key={index}>

            {/* Category image */}
            <Image
              src={category.image}
              alt={category.name}
            />


            {/* Text Content */}
            <Content>

              {/* Category Name */}
              <CategoryName>
                {category.name}
              </CategoryName>

            </Content>

          </Card>
        ))}

      </Grid>

    </Container>
  )
}


// Component export cheyyunnu
export default Collections