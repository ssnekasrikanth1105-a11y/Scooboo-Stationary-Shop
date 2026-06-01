
import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Hero = () => {
  return (
    <Container>

      <BlurOne />
      <BlurTwo />

      <Left>

        <Badge> New Premium Collection</Badge>

        <Title>
          Make More Online <span>For Less</span>
        </Title>

        <Description>
          Stylish notebooks, aesthetic pens,
          creative accessories and premium study essentials
          for students who love modern stationery.
        </Description>

        <Buttons>

          <Link to="/Collection">
            <ShopButton>Shop Collection</ShopButton>
          </Link>

          <Link to="/Deals">
            <OfferButton>Special Offers</OfferButton>
          </Link>

        </Buttons>

        <Info>

          <InfoCard>
            <h1>15K+</h1>
            <p>Happy Students</p>
          </InfoCard>

          <InfoCard>
            <h1>500+</h1>
            <p>Premium Products</p>
          </InfoCard>

          <InfoCard>
            <h1>4.9★</h1>
            <p>Top Reviews</p>
          </InfoCard>

        </Info>

      </Left>

      <Right>

        <MainCard>

          <img
            src="https://images.unsplash.com/photo-1701363529491-e646b9d11e98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHN0YXRpb25hcnl8ZW58MHx8MHx8fDA%3D"
            alt=""
          />

          <ProductTag className="tag1">
            Premium Notebook 
          </ProductTag>

          <ProductTag className="tag2">
            Best Seller 
          </ProductTag>

        </MainCard>

      </Right>

    </Container>
  );
};

export default Hero;

const float = keyframes`
  0%{
    transform: translateY(0px);
  }

  50%{
    transform: translateY(-15px);
  }

  100%{
    transform: translateY(0px);
  }
`;

const glow = keyframes`
  0%{
    transform: scale(1);
  }

  50%{
    transform: scale(1.1);
  }

  100%{
    transform: scale(1);
  }
`;

const Container = styled.section`
  min-height: 100vh;

  background: #0f172a;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 80px 8%;
  gap: 60px;

  flex-wrap: wrap;

  overflow: hidden;
  position: relative;
`;

const BlurOne = styled.div`
  position: absolute;

  width: 350px;
  height: 350px;

  background: #7c3aed;
  filter: blur(150px);

  top: -100px;
  left: -100px;

  opacity: 0.5;

  animation: ${glow} 6s infinite;
`;

const BlurTwo = styled.div`
  position: absolute;

  width: 300px;
  height: 300px;

  background: #06b6d4;
  filter: blur(140px);

  bottom: -80px;
  right: -80px;

  opacity: 0.5;

  animation: ${glow} 5s infinite;
`;

const Left = styled.div`
  flex: 1;
  min-width: 320px;
  position: relative;
  z-index: 5;
`;

const Badge = styled.div`
  width: fit-content;

  padding: 10px 22px;
  border-radius: 30px;

  background: rgba(255,255,255,0.08);

  border: 1px solid rgba(255,255,255,0.1);

  color: white;

  margin-bottom: 25px;

  backdrop-filter: blur(10px);
`;

const Title = styled.h1`
  font-size: 78px;
  line-height: 1.1;

  color: white;

  margin-bottom: 25px;

  span{
    background: linear-gradient(90deg,#7c3aed,#06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media(max-width:768px){
    font-size: 48px;
  }
`;

const Description = styled.p`
  color: #cbd5e1;

  font-size: 18px;
  line-height: 1.9;

  max-width: 580px;

  margin-bottom: 40px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const ShopButton = styled.button`
  padding: 16px 38px;

  border: none;
  border-radius: 14px;

  background: linear-gradient(90deg,#7c3aed,#06b6d4);

  color: white;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
  transition: 0.3s;

  &:hover{
    transform: translateY(-6px);
    box-shadow: 0 15px 30px rgba(124,58,237,0.4);
  }
`;

const OfferButton = styled.button`
   padding: 16px 38px;

  border: none;
  border-radius: 14px;

  background: linear-gradient(90deg,#7c3aed,#06b6d4);

  color: white;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
  transition: 0.3s;

  &:hover{
    transform: translateY(-6px);
    box-shadow: 0 15px 30px rgba(124,58,237,0.4);
  }
`;

const Info = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  margin-top: 50px;
`;

const InfoCard = styled.div`
  padding: 20px 28px;

  border-radius: 22px;

  background: rgba(255,255,255,0.08);

  border: 1px solid rgba(255,255,255,0.1);

  backdrop-filter: blur(12px);

  h1{
    color: white;
    margin-bottom: 8px;
  }

  p{
    color: #cbd5e1;
  }
`;

const Right = styled.div`
  flex: 1;
  min-width: 320px;

  display: flex;
  justify-content: center;

  position: relative;
  z-index: 5;
`;

const MainCard = styled.div`
  position: relative;

  width: 420px;
  border-radius: 35px;

  overflow: hidden;

  animation: ${float} 5s ease-in-out infinite;

  box-shadow: 0 25px 50px rgba(0,0,0,0.4);

  img{
    width: 100%;
    height: 550px;
    object-fit: cover;
  }
`;

const ProductTag = styled.div`
  position: absolute;

  padding: 14px 24px;

  border-radius: 16px;

  background: rgba(217, 221, 3, 0.87);

  color: #635a0c78;

  backdrop-filter: blur(10px);

  font-weight: 600;

  &.tag1{
    top: 20px;
    left: 20px;
  }

  &.tag2{
    bottom: 20px;
    right: 20px;
  }
`;