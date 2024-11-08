// src/components/Sobre.jsx
import React from "react";
import styled from "styled-components";

const StyledSobre = styled.div`
  text-align: center;
  padding: 20px;
  margin-top: 40px;

  h1 {
    font-size: 2.5rem;
    color: #333;
  }

  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    max-width: 1000px;
    margin: 0 auto;
  }

  img {
    width: 300px;
    border-radius: 8px;
  }

  .text-section {
    max-width: 500px;
    text-align: left;

    h2 {
      font-size: 1.8rem;
      color: #0A67C4;
    }

    p {
      font-size: 1rem;
      color: #666;
      line-height: 1.5;
    }
  }
`;

function Sobre() {
  return (
    <StyledSobre>
      <h1>Consulte os nossos benefícios</h1>
      <div className="content">
        <img src="https://via.placeholder.com/300" alt="Imagem sobre o benefício" />
        <div className="text-section">
          <h2>Tratamento de qualidade para cuidar de sua família</h2>
          <p>
            Somos uma empresa dedicada a oferecer as melhores soluções para
            cuidar dos nossos clientes, com segurança e respeito.
          </p>
        </div>
      </div>
    </StyledSobre>
  );
}

export default Sobre;
