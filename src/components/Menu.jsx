// src/components/Menu.jsx
import React from "react";
import styled from "styled-components";
import logoNomeBlue from "../assets/images/family_Care_logo_colored.png"

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
    padding: px 0;
  }

  .logo {
    display: flex;
    align-items: center;

    img {
      height: 40px;
    }
  }

  nav ul {
    display: flex;
    list-style: none;
    padding: 0;
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

    &:hover,
    &:focus {
      background-color: #2d84da;
      color: #ffffff;
    }
  }

  .icon-menu {
    display: none; /* Escondido para desktop */
  }

  @media (max-width: 768px) {
    .limitador {
      flex-direction: column;
    }

    nav ul {
      display: none;
    }

    .icon-menu {
      display: inline-block; /* Exibe o ícone no mobile */
    }
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <div className="limitador">
        <div className="logo">
          <a href="index.html">
            <img src={logoNomeBlue} alt="Logo familyCare" />
          </a>
        </div>
        <nav>
          <h2>
            <a href="#menu" className="icon-menu">
              <img src="assets/icon-menu.svg" alt="Ícone de menu" />
            </a>
          </h2>
          <ul className="menu">
            <li><a href="index.html" className="menu-item">Home</a></li>
            <li><a href="sobre-nos.html" className="menu-item">Sobre nós</a></li>
            <li><a href="servicos.html" className="menu-item">Serviços</a></li>
          </ul>
        </nav>
      </div>
    </StyledMenu>
  );
}

export default Menu;
