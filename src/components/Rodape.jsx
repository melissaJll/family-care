// src/components/Rodape.jsx
import React from "react";
import styled from "styled-components";

const RodapeContainer = styled.footer`
  background-color: #D3E8F9;
  color: #333;
  padding: 40px 20px;
  text-align: center;

  .rodape-secao {
    display: flex;
    justify-content: center;
    gap: 60px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .rodape-item {
    max-width: 200px;
  }

  h4 {
    color: #0A67C4;
    margin-bottom: 10px;
  }

  p, a {
    color: #333;
    font-size: 0.9rem;
    text-decoration: none;
  }
`;

function Rodape() {
  return (
    <RodapeContainer>
      <div className="rodape-secao">
        <div className="rodape-item">
          <h4>Empresa</h4>
          <p>Sobre nós</p>
          <p>Carreiras</p>
        </div>
        <div className="rodape-item">
          <h4>Informações</h4>
          <p>FAQ</p>
          <p>Contato</p>
        </div>
        <div className="rodape-item">
          <h4>Redes Sociais</h4>
          <p><a href="#">Facebook</a></p>
          <p><a href="#">Instagram</a></p>
        </div>
      </div>
      <p>&copy; 2024 Family Care. Todos os direitos reservados.</p>
    </RodapeContainer>
  );
}

export default Rodape;
