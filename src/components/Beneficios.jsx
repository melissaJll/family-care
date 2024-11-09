// src/components/Beneficios.jsx
import React from "react";
import styled from "styled-components";

const BeneficiosContainer = styled.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #f9fafc;

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
    height: 350px; /* Aumentando a altura para ser um retângulo */
    padding: 20px;
    text-align: left;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transição suave */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Distribuindo o conteúdo */
    
    &:hover {
      transform: translateY(-5px); /* Levanta o card */
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Aumenta a sombra ao passar o mouse */
    }
  }

  .icon {
    font-size: 3rem; /* Aumentando o tamanho do ícone */
    color: #0a67c4;
    margin-bottom: 20px;
  }

  h3 {
    color: #0a67c4;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

function Beneficios() {
  return (
    <BeneficiosContainer>
      <h2>Consulte os nossos benefícios</h2>
      <div className="beneficio-list">
        <div className="beneficio-item">
          <div className="icon">
            <i className="fas fa-shield-alt" /> {/* Ícone de escudo do Font Awesome */}
          </div>
          <h3>Alta Qualidade</h3>
          <p>Tratamento de qualidade para cuidar da sua família com respeito e segurança.</p>
        </div>
        <div className="beneficio-item">
          <div className="icon">
            <i className="fas fa-comments" /> {/* Ícone de comentário do Font Awesome */}
          </div>
          <h3>Comunicação Fácil</h3>
          <p>Facilitamos a comunicação entre cuidadores e familiares, mantendo todos informados.</p>
        </div>
        <div className="beneficio-item">
          <div className="icon">
            <i className="fas fa-headset" /> {/* Ícone de headset do Font Awesome */}
          </div>
          <h3>Suporte 24/7</h3>
          <p>Nossa equipe está sempre pronta para atender às suas necessidades.</p>
        </div>
      </div>
    </BeneficiosContainer>
  );
}

export default Beneficios;
