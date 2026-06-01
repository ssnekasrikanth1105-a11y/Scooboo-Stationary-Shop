import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <Nav>
      <LogoSection>
        ✏️ <span>SCOOBOO</span>
      </LogoSection>

      <Menu>
        <StyledLink to="/">
          <MenuItem>Home</MenuItem>
        </StyledLink>

        <StyledLink to="/shop">
          <MenuItem>Shop</MenuItem>
        </StyledLink>

        <StyledLink to="/collection">
          <MenuItem>Collections</MenuItem>
        </StyledLink>

        <StyledLink to="/deals">
          <MenuItem>Deals</MenuItem>
        </StyledLink>

        <StyledLink to="/wishlist">
          <MenuItem>Wishlist</MenuItem>
        </StyledLink>

        <StyledLink to="/contact">
          <MenuItem>Contact</MenuItem>
        </StyledLink>

        <StyledLink to="/login">
          <MenuItem>Login</MenuItem>
        </StyledLink>
      </Menu>

      <RightSection>
        <Search placeholder="Search items..." />

        <AdminLogo>
          IA
        </AdminLogo>

        <StyledLink to="/cart">
          <Cart>
            🛒
           <Badge>{cartItems.length}</Badge>
          </Cart>
        </StyledLink>
      </RightSection>
    </Nav>
  );
};

export default Navbar;

/* ================= STYLES ================= */

const Nav = styled.nav`
  width: 100%;
  height: 85px;
  background: #111827;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 5px 20px rgba(0,0,0,0.3);

  @media (max-width: 900px) {
    padding: 0 20px;
  }
`;

const LogoSection = styled.h1`
  font-size: 32px;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  span {
    background: linear-gradient(
      90deg,
      #8b5cf6,
      #06b6d4,
      #ec4899
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 28px;
  list-style: none;
  align-items: center;

  @media (max-width: 1000px) {
    gap: 15px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const MenuItem = styled.li`
  color: white;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  transition: 0.3s;

  &:hover {
    color: #06b6d4;
  }

  &::after {
    content: "";
    width: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      #8b5cf6,
      #06b6d4
    );

    position: absolute;
    left: 0;
    bottom: -8px;
    border-radius: 10px;
    transition: 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const Search = styled.input`
  padding: 12px 18px;
  width: 180px;

  border: 1px solid #374151;
  border-radius: 30px;
  outline: none;

  background: #1f2937;
  color: white;

  transition: 0.3s;

  &:focus {
    border-color: #06b6d4;
    width: 220px;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const AdminLogo = styled.div`
  width: 48px;
  height: 48px;

  border-radius: 50%;

  background: linear-gradient(
    135deg,
    #8b5cf6,
    #06b6d4,
    #ec4899
  );

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-weight: bold;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    transform: scale(1.08);
  }
`;

const Cart = styled.div`
  width: 50px;
  height: 50px;

  border-radius: 50%;

  background: linear-gradient(
    135deg,
    #f59e0b,
    #ef4444
  );

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  font-size: 22px;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    transform: scale(1.08);
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -4px;

  width: 20px;
  height: 20px;

  border-radius: 50%;

  background: red;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 11px;
  font-weight: bold;
`;