import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <Content>

        <Box>
          <Logo>✏️ ScooBoo</Logo>

          <Description>
            Your premium destination for notebooks,
            pens, planners, office essentials and
            creative stationery supplies.
          </Description>
        </Box>

        <Box>
          <Title>Quick Links</Title>

          <List>
            <li><StyledLink to="/">Home</StyledLink></li>
            <li><StyledLink to="/shop">Shop</StyledLink></li>
            <li><StyledLink to="/collection">Collections</StyledLink></li>
            <li><StyledLink to="/deals">Deals</StyledLink></li>
            <li><StyledLink to="/contact">Contact</StyledLink></li>
          </List>
        </Box>

        <Box>
          <Title>Customer Support</Title>

          <List>
            <li>Help Center</li>
            <li>Shipping Policy</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </List>
        </Box>

        <Box>
          <Title>Contact Us</Title>

          <ContactText>Email: support@inkaura.com</ContactText>
          <ContactText>Phone: +91 98765 43210</ContactText>
          <ContactText>Calicut, Kerala</ContactText>
        </Box>

      </Content>

      <Bottom>
        © {new Date().getFullYear()} InkAura. All Rights Reserved.
      </Bottom>
    </FooterContainer>
  );
};

export default Footer;

/* ================= STYLES ================= */

const FooterContainer = styled.footer`
  background: #111827;
  color: white;
  padding: 60px 8% 25px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
`;

const Box = styled.div`
  flex: 1;
  min-width: 220px;
`;

const Logo = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;

  background: linear-gradient(
    90deg,
    #8b5cf6,
    #06b6d4
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  color: #cbd5e1;
  line-height: 1.8;
`;

const Title = styled.h3`
  color: white;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 12px;
    color: #cbd5e1;
    cursor: pointer;
    transition: 0.3s;
  }

  li:hover {
    color: #06b6d4;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #cbd5e1;

  &:hover {
    color: #06b6d4;
  }
`;

const ContactText = styled.p`
  color: #cbd5e1;
  margin-bottom: 12px;
`;

const Bottom = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;

  border-top: 1px solid rgba(255,255,255,0.1);

  color: #94a3b8;
  font-size: 14px;
`;