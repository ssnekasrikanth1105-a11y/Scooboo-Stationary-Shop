import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

function Products() {
  return (
    <Wrapper>

      <Sidebar />

      <Content>

        <TopBar>
          <h1>Products</h1>

          <AddButton>
            + Add Product
          </AddButton>
        </TopBar>

      </Content>

    </Wrapper>
  );
}

export default Products;

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 40px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddButton = styled.button`
  background: #2563eb;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 10px;
  cursor: pointer;
`;