// src/components/Menu.jsx
import React from "react";
import styled from "styled-components";

const StyledMenu = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #0A67C4; // cor do fundo da barra de navegação

  a {
    text-decoration: none;
    color: #fcf6f6;
    height: 40px;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 100ms;

    &:hover {
      background-color: #a575cc;
      color: #3b2d2d;
    }
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <a href="#home">Home</a>
      <a href="#produtos">Produtos</a>
      <a href="#contatos">Contatos</a>
    </StyledMenu>
  );
}

export default Menu;
