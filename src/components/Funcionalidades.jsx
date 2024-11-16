// src/components/Funcionalidades.jsx
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import tela1 from '../assets/images/tela1.png'; 
import tela2 from '../assets/images/tela2.png'; 
import tela3 from '../assets/images/tela3.png'; 

// Importando o CSS diretamente no JS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// Estilos do container e elementos
const FuncionalidadesContainer = styled.section`
  display: flex;
  justify-content: space-around;

  align-items: center;

  background-color: #ffffff;
  justify-content: center;
  padding-top: 4rem ;
  padding-bottom: 4rem ;

  .funcionalidade-list {
    width: 49%;
    
  }

  h2 {
    margin-bottom: 2rem;
  }

  .funcionalidade-item {
    margin-bottom: 30px;
    text-align: left;

    h3 {
      color: #0a67c4;
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    p {
      color: #666;
      font-size: 1rem;
    }
  }

  .carrossel {
    width: 28%;
    margin-right: -3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Altera a direção para coluna */
    align-items: center; /* Centraliza os itens */
    
    
    .funcionalidade-list,
    .carrossel {
      width: 100%; /* Cada um ocupa a largura total */
      margin-bottom: 2rem; /* Adiciona espaço entre os elementos */
    }

    .carrossel {
      margin-right: 0; /* Remove a margem direita no carrossel */
    }
  }
`;

// Função para o carrossel de imagens
function Funcionalidades() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <FuncionalidadesContainer>
      <div className="funcionalidade-list">
        <h2>Como funciona o software</h2>
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

      <div className="carrossel">
        <Slider {...settings}>
          <div>
            <img src={tela1} alt="Tela 1" style={{ width: "80%" }} />
          </div>
          <div>
            <img src={tela2} alt="Tela 2" style={{ width: "80%" }} />
          </div>
          <div>
            <img src={tela3} alt="Tela 3" style={{ width: "80%" }} />
          </div>
        </Slider>
      </div>
    </FuncionalidadesContainer>
  );
}

export default Funcionalidades;
