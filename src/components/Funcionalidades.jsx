// src/components/Funcionalidades.jsx
import React from "react";
import styled from "styled-components";

const FuncionalidadesContainer = styled.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #FFFFFF;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
  }

  .funcionalidade-list {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
  }

  .funcionalidade-item {
    max-width: 300px;
    padding: 20px;
    text-align: left;
    border: 1px solid #DDD;
    border-radius: 8px;
    background-color: #F9FAFC;
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

function Funcionalidades() {
  return (
    <FuncionalidadesContainer>
      <h2>Como funciona o software</h2>
      <div className="funcionalidade-list">
        <div className="funcionalidade-item">
          <h3>Relatórios Diários</h3>
          <p>Receba atualizações diárias sobre o cuidado do seu familiar.</p>
        </div>
        <div className="funcionalidade-item">
          <h3>Notificações em Tempo Real</h3>
          <p>Fique informado sobre qualquer ocorrência importante instantaneamente.</p>
        </div>
        <div className="funcionalidade-item">
          <h3>Agenda de Atividades</h3>
          <p>Planeje e acompanhe as atividades diárias do idoso de maneira prática.</p>
        </div>
      </div>
    </FuncionalidadesContainer>
  );
}

export default Funcionalidades;
