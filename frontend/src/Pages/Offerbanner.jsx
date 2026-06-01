import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const OfferBanner = () => {
  return (
    <Container>

      <BlurOne />
      <BlurTwo />

      <Content>

        <Tag>🔥 Limited Time Offer</Tag>

        <Title>
          Flat <span>50% OFF</span>
        </Title>

        <Description>
          Upgrade your study desk with premium notebooks,
          planners, pens and stationery essentials.
          Grab exciting discounts before the offer ends.
        </Description>

        <OfferBox>

          <OfferCard>
            <h2>50%</h2>
            <p>Notebook Sale</p>
          </OfferCard>

          <OfferCard>
            <h2>Buy 2</h2>
            <p>Get 1 Free Pen</p>
          </OfferCard>

          <OfferCard>
            <h2>Free</h2>
            <p>Shipping ₹499+</p>
          </OfferCard>

        </OfferBox>

        <ButtonGroup>

          {/* <Link to="/shop">
            <ShopButton>Shop Now</ShopButton>
          </Link> */}

          <Link to="/deals">
            <DealButton>View Deals</DealButton>
          </Link>

        </ButtonGroup>

      </Content>

    </Container>
  );
};

export default OfferBanner;

/* ================= ANIMATIONS ================= */

const float = keyframes`
  0%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(-10px);
  }
  100%{
    transform: translateY(0px);
  }
`;

/* ================= STYLES ================= */

const Container = styled.section`
  position: relative;
  padding: 90px 8%;
  background: #0f172a;
  overflow: hidden;
`;

const BlurOne = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background: #8b5cf6;
  filter: blur(150px);
  top: -100px;
  left: -100px;
  opacity: 0.4;
`;

const BlurTwo = styled.div`
  position: absolute;
  width: 280px;
  height: 280px;
  background: #06b6d4;
  filter: blur(150px);
  bottom: -100px;
  right: -100px;
  opacity: 0.4;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1100px;
  margin: auto;
  text-align: center;
`;

const Tag = styled.div`
  display: inline-block;
  padding: 10px 22px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 30px;
  color: white;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  color: white;
  font-size: 65px;
  margin-bottom: 20px;

  span{
    background: linear-gradient(
      90deg,
      #8b5cf6,
      #06b6d4
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media(max-width:768px){
    font-size: 45px;
  }
`;

const Description = styled.p`
  color: #cbd5e1;
  font-size: 18px;
  max-width: 700px;
  margin: auto;
  line-height: 1.8;
`;

const OfferBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const OfferCard = styled.div`
  width: 220px;
  padding: 25px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  animation: ${float} 4s infinite;

  h2{
    color: white;
    font-size: 32px;
    margin-bottom: 10px;
  }

  p{
    color: #cbd5e1;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const ShopButton = styled.button`
  padding: 16px 35px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  color: white;
  font-weight: 600;
  font-size: 16px;

  background: linear-gradient(
    90deg,
    #8b5cf6,
    #06b6d4
  );

  transition: .3s;

  &:hover{
    transform: translateY(-5px);
  }
`;

const DealButton = styled.button`
  padding: 16px 35px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  color: white;
  font-weight: 600;
  font-size: 16px;

  background: linear-gradient(
    90deg,
    #8b5cf6,
    #06b6d4
  );

  transition: .3s;

  &:hover{
    transform: translateY(-5px);
  }
`;

//   &:hover{
//     background: rgba(255,255,255,0.08);
//   }
// `;