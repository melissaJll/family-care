// src/components/Beneficios.jsx
import React from "react";
import styled from "styled-components";

const BeneficiosContainer = styled.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #F9FAFC;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
  }

  .beneficio-list {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
  }

  .beneficio-item {
    max-width: 300px;
    padding: 20px;
    text-align: left;
    background-color: #FFFFFF;
    border: 1px solid #DDD;
    border-radius: 8px;
  }

  h3 {
    color: #0A67C4;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    font-size: 1rem;
  }
`;

function Beneficios() {
  return (
    <BeneficiosContainer>
      <h2>Consulte os nossos benefícios</h2>
      <div className="beneficio-list">
        <div className="beneficio-item">
          <h3>Alta Qualidade</h3>
          <p>Tratamento de qualidade para cuidar da sua família com respeito e segurança.</p>
        </div>
        <div className="beneficio-item">
          <h3>Comunicação Fácil</h3>
          <p>Facilitamos a comunicação entre cuidadores e familiares, mantendo todos informados.</p>
        </div>
        <div className="beneficio-item">
          <h3>Suporte 24/7</h3>
          <p>Nossa equipe está sempre pronta para atender às suas necessidades.</p>
        </div>
      </div>
    </BeneficiosContainer>
  );
}

export default Beneficios;
