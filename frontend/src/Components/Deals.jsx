// Offers.jsx

import styled from "styled-components";

const offers = [
  {
    id: 1,
    title: "Back To School Offer",
    discount: "30% OFF",
    description: "Get amazing discounts on notebooks, pens, and school kits.",
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free",
    discount: "BOGO",
    description: "Purchase selected marker packs and get another free.",
  },
  {
    id: 3,
    title: "Student Special",
    discount: "20% OFF",
    description: "Special discounts for students on all stationery items.",
  },
  {
    id: 4,
    title: "Office Essentials",
    discount: "40% OFF",
    description: "Save more on office files, staplers, and organizers.",
  },
  {
    id: 5,
    title: "Weekend Mega Sale",
    discount: "50% OFF",
    description: "Flat 50% off on selected art and craft supplies.",
  },
  {
    id: 6,
    title: "Combo Offer",
    discount: "₹299 Only",
    description: "Notebook + Pen + Geometry Box combo at best price.",
  },
];

export default function Offers() {
  return (
    <Container>
      <Title>Latest Offers</Title>

      <OfferGrid>
        {offers.map((offer) => (
          <Card key={offer.id}>
            <Discount>{offer.discount}</Discount>

            <OfferTitle>{offer.title}</OfferTitle>

            <Description>{offer.description}</Description>

            <Button>Shop Now</Button>
          </Card>
        ))}
      </OfferGrid>
    </Container>
  );
}

/* Styled Components */

const Container = styled.div`
  min-height: 100vh;
  padding: 40px;
  background: #f9fafb;
  background:url("https://png.pngtree.com/background/20211215/original/pngtree-blur-light-spots-warm-color-bokeh-white-light-effect-background-picture-image_1465634.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 42px;
  margin-bottom: 40px;
  color: #111827;
`;

const OfferGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const Card = styled.div`
  background: white;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
  }
`;

const Discount = styled.h2`
  font-size: 36px;
  color: #dc2626;
  margin-bottom: 15px;
`;

const OfferTitle = styled.h3`
  font-size: 24px;
  color: #1f2937;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: #2563eb;
  color: white;
  border: none;
  padding: 12px 22px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #1d4ed8;
  }
`;
