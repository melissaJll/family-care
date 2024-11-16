// src/components/Menu.jsx
import React, { useState } from "react";
import styled from "styled-components";
import logoNomeBlue from "../assets/images/family_Care_logo_colored.png";
import menuIcon from "../assets/images/icon-menuu.png"

const StyledMenu = styled.header`
  top: 0;
  position: sticky;
  z-index: 1000; /* Garante que o menu fica acima de outros elementos */
  background-color: #F9FAFC;


  .limitador {
    max-width: 80vw;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0; /* Corrigido para 0 */
  }

  .logo {
    display: flex;
    align-items: center;

    img {
      height: 40px;
    }
  }

  nav {
    display: flex;
    align-items: center;
  }

  nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu-item {
    font-weight: bold;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(0, 0, 0);
    height: 44px;
    padding: 0.5rem 1rem;
    transition: background-color 200ms, color 200ms;
    border-radius: 2rem;
    text-decoration: none;
    margin-top: 0.4rem;

    &:hover,
    &:focus {
      background-color: #2d84da;
      color: #ffffff;
    }
  }

  .icon-menu {
    display: none; /* Escondido para desktop */
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .limitador {
      flex-direction: column;
      align-items: flex-start; /* Alinha os itens à esquerda */
    }

    nav ul {
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; /* Mostra ou esconde o menu */
      flex-direction: column; /* Coloca os itens em coluna */
      width: 100%; /* Faz o menu ocupar toda a largura */
      background-color: #F9FAFC; /* Fundo do menu */
      position: absolute; /* Posiciona o menu */
      top: 60px; /* Abaixo do header */
      left: 0; /* Alinhado à esquerda */
      padding: 1rem 0; /* Espaçamento interno */
    }

    .icon-menu {
      display: inline-block; /* Exibe o ícone no mobile */
    }
    img {
      height: 28px;
    }
  }
`;



const MenuItem = styled.a`
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(0, 0, 0);
  height: 44px;
  padding: 0.1rem 1rem;
  transition: background-color 200ms, color 200ms;
  border-radius: 2rem;
  text-decoration: none; /* Remove o sublinhado */
  
  margin-top: 0.4rem;

  &:hover,
  &:focus {
    background-color: #2d84da;
    color: #ffffff;
  }
`;

function Menu() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a visibilidade do menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledMenu isOpen={isOpen}>
      <div className="limitador">
        <div className="logo">
          <a href="index.html">
            <img src={logoNomeBlue} alt="Logo familyCare" />
          </a>
        </div>
        <nav>
          <h2>
            <span className="icon-menu" onClick={toggleMenu}>
              <img src={menuIcon} alt="menu" />
            </span>
          </h2>
          <ul className="menu">
          <li>
              <MenuItem href="#funcionalidades">Funcionalidades</MenuItem>
            </li>
            <li><a href="#beneficios" className="menu-item">Benefícios</a></li>
            <li><a href="#depoimentos" className="menu-item">Depoimentos</a></li>
          </ul>
        </nav>
      </div>
    </StyledMenu>
  );
}

export default Menu;