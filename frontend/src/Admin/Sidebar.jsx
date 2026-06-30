import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Container>

      <Title>📊 Admin Panel</Title>

      <Menu>
        <StyledLink to="/admin">
          Dashboard
        </StyledLink>

        <StyledLink to="/admin/products">
          Products
        </StyledLink>

        <StyledLink to="/admin/customers">
          Customers
        </StyledLink>

        <StyledLink to="/admin/orders">
          Orders
        </StyledLink>

        <StyledLink to="/admin/contacts">
          Contacts
        </StyledLink>
      </Menu>

    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  width: 250px;
  height: 100vh;
  background: #111827;
  color: white;
  padding: 30px;
`;

const Title = styled.h2`
  margin-bottom: 40px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 12px;
  border-radius: 10px;

  &:hover {
    background: #1f2937;
  }
`;