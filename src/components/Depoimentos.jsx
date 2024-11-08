// src/components/Depoimentos.jsx
import React from "react";
import styled from "styled-components";

const DepoimentosContainer = styled.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #F9FAFC;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
  }

  .depoimento-list {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .depoimento-item {
    max-width: 300px;
    padding: 20px;
    text-align: left;
    background-color: #FFFFFF;
    border: 1px solid #DDD;
    border-radius: 8px;
    font-style: italic;
  }

  p {
    color: #666;
    font-size: 1rem;
  }
`;

function Depoimentos() {
  return (
    <DepoimentosContainer>
      <h2>Depoimentos</h2>
      <div className="depoimento-list">
        <div className="depoimento-item">
          <p>"O serviço é um ótimo suporte para a nossa família, que pode acompanhar tudo de perto."</p>
        </div>
        <div className="depoimento-item">
          <p>"Estamos muito satisfeitos com a qualidade do atendimento e as atualizações em tempo real."</p>
        </div>
      </div>
    </DepoimentosContainer>
  );
}

export default Depoimentos;
