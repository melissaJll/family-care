// src/components/Depoimentos.jsx
import React from "react";
import styled from "styled-components";

const DepoimentosContainer = styled.section`
  text-align: center;
  padding: 60px 20px;
  background-color: #f9fafc;
  margin-top: 40px;

  h2 {
    font-size: 2.8rem;
    color: #333;
    margin-bottom: 30px;
    font-weight: 600;
  }

  .depoimento-list {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .depoimento-item {
    max-width: 350px;
    width: 100%;
    padding: 30px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-style: italic;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-10px); /* Levanta o card ao passar o mouse */
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); /* Sombra mais forte */
    }
  }

  p {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .client-name {
    font-size: 1.2rem;
    font-weight: 500;
    color: #0a67c4;
    margin-top: 10px;
  }
`;

function Depoimentos() {
  return (
    <DepoimentosContainer id="depoimentos">
      <h2>O que nossos clientes dizem</h2>
      <div className="depoimento-list">
        <div className="depoimento-item">
          <p>"O serviço é um ótimo suporte para a nossa família, que pode acompanhar tudo de perto."</p>
          <div className="client-name">João Silva</div>
        </div>
        <div className="depoimento-item">
          <p>"Estamos muito satisfeitos com a qualidade do atendimento e as atualizações em tempo real."</p>
          <div className="client-name">Maria Oliveira</div>
        </div>
        <div className="depoimento-item">
          <p>"A atenção que recebemos é excepcional. O acompanhamento diário faz toda a diferença."</p>
          <div className="client-name">Carlos Pereira</div>
        </div>
      </div>
    </DepoimentosContainer>
  );
}

export default Depoimentos;
