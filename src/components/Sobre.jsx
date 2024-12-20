// src/components/Sobre.jsx
import React, { useEffect } from 'react';
import styled from "styled-components";
import imageIdosos from '../assets/images/imageIdosos.png'; import AOS from 'aos';
import 'aos/dist/aos.css';

const StyledSobre = styled.div`
  text-align: center;
  padding: 20px;
  margin-top: 40px;
  padding-top: 3rem ;
  padding-bottom: 3rem ;

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
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  return (
    <StyledSobre>
      <h1 >Nossa Missão</h1>
      <div className="content">
        <img src={imageIdosos} alt="Imagem sobre o benefício" />
        <div className="text-section">
          <h2 data-aos="zoom-in">Tratamento de qualidade para cuidar de sua família</h2>
          <p data-aos="zoom-in">
            Somos uma empresa dedicada a oferecer as melhores soluções para
            cuidar dos nossos clientes, com segurança e respeito.
          </p>
        </div>
      </div>
    </StyledSobre>
  );
}

export default Sobre;
