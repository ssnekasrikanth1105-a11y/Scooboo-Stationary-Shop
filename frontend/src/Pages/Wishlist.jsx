import React from "react";
import styled from "styled-components";

const Wishlist = () => {
  return (
    <Container>

      <Title> Wishlist</Title>

      <Grid>

        <Card>

          <Image
            src="https://images.unsplash.com/photo-1517842645767-c639042777db"
          />

          <ProductName>Luxury Pen</ProductName>

          <Price>₹199</Price>

          <Button>Add To Cart</Button>

        </Card>

        <Card>

          <Image
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
          />

          <ProductName>Study Planner</ProductName>

          <Price>₹349</Price>

          <Button>Add To Cart</Button>

        </Card>

      </Grid>

    </Container>
  );
};

export default Wishlist;



const Container = styled.div`
  min-height: 100vh;
  background: #111827;
  padding: 40px;
  color: white;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  gap: 30px;
`;

const Card = styled.div`
  background: #1f2937;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  transition: 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 15px;
  object-fit: cover;
`;

const ProductName = styled.h2`
  margin-top: 20px;
`;

const Price = styled.h3`
  color: #06b6d4;
`;

const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(90deg,#ec4899,#8b5cf6);
  color: white;
  cursor: pointer;
`;