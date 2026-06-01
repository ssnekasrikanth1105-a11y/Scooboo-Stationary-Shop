import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

function Cart() {

  const { cartItems, removeFromCart } =
    useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total +
      parseInt(item.price.replace("₹", "")) *
      item.quantity,
    0
  );

  return (
    <Container>

      <Title>🛒 My Shopping Cart</Title>

      {cartItems.length === 0 ? (

        <EmptyCart>
          <EmptyIcon>🛍️</EmptyIcon>
          <h2>Your Cart Is Empty</h2>
          <p>Add some amazing stationery products.</p>
        </EmptyCart>

      ) : (

        <Wrapper>

          <CartSection>

            {cartItems.map((item) => (

              <CartCard key={item.id}>

                <ProductImage
                  src={item.image}
                  alt={item.name}
                />

                <ProductInfo>

                  <ProductName>
                    {item.name}
                  </ProductName>

                  <Price>
                    {item.price}
                  </Price>

                  <Quantity>
                    Quantity : {item.quantity}
                  </Quantity>

                </ProductInfo>

                <RemoveButton
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </RemoveButton>

              </CartCard>

            ))}

          </CartSection>

          <SummarySection>

            <SummaryTitle>
              Order Summary
            </SummaryTitle>

            <Row>
              <span>Products</span>
              <span>{cartItems.length}</span>
            </Row>

            <Row>
              <span>Shipping</span>
              <span>₹50</span>
            </Row>

            <Divider />

            <TotalRow>
              <span>Total</span>
              <span>
                ₹{totalPrice + 50}
              </span>
            </TotalRow>

            <CheckoutButton>
              Proceed To Checkout
            </CheckoutButton>

          </SummarySection>

        </Wrapper>

      )}

    </Container>
  );
}

export default Cart;

/* ================= STYLES ================= */

const Container = styled.div`
  min-height: 100vh;
  padding: 50px;
  background: linear-gradient(
    135deg,
    #eef2ff,
    #f8fafc
  );
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  font-size: 50px;

  background: linear-gradient(
    90deg,
    #8b5cf6,
    #06b6d4,
    #ec4899
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 30px;

  @media(max-width:900px){
    flex-direction: column;
  }
`;

const CartSection = styled.div`
  flex: 2;
`;

const SummarySection = styled.div`
  flex: 1;

  background: linear-gradient(
    135deg,
    #111827,
    #1f2937
  );

  color: white;

  padding: 30px;

  border-radius: 25px;

  height: fit-content;

  box-shadow:
    0 15px 40px rgba(0,0,0,.2);
`;

const CartCard = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  background: white;

  padding: 20px;

  border-radius: 25px;

  margin-bottom: 25px;

  border: 2px solid #e5e7eb;

  transition: .4s;

  &:hover{
    transform: translateY(-5px);

    box-shadow:
      0 15px 35px rgba(0,0,0,.1);
  }
`;

const ProductImage = styled.img`
  width: 150px;
  height: 150px;

  object-fit: cover;

  border-radius: 20px;

  border: 4px solid #f3f4f6;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductName = styled.h2`
  color: #111827;
  margin-bottom: 10px;
`;

const Price = styled.p`
  color: #2563eb;
  font-size: 22px;
  font-weight: bold;
`;

const Quantity = styled.p`
  color: #6b7280;
  margin-top: 10px;
`;

const RemoveButton = styled.button`
  padding: 12px 20px;

  border: none;

  border-radius: 12px;

  background: #ef4444;

  color: white;

  cursor: pointer;

  font-weight: bold;

  transition: .3s;

  &:hover{
    background: #dc2626;
    transform: scale(1.05);
  }
`;

const SummaryTitle = styled.h2`
  margin-bottom: 25px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #374151;
  margin: 20px 0;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 24px;
  font-weight: bold;

  margin-bottom: 25px;
`;

const CheckoutButton = styled.button`
  width: 100%;

  padding: 16px;

  border: none;

  border-radius: 15px;

  background: linear-gradient(
    135deg,
    #f59e0b,
    #ef4444
  );

  color: white;

  font-size: 18px;
  font-weight: bold;

  cursor: pointer;

  transition: .4s;

  &:hover{
    transform: translateY(-3px);
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  margin-top: 120px;
`;

const EmptyIcon = styled.div`
  font-size: 80px;
  margin-bottom: 20px;
`;