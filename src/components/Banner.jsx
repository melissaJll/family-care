import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imageBackg from '../assets/images/image-backg.png'; // Caminho da imagem local

// Estilo para o Banner
const StyledBanner = styled.div`
  background-image: url(${imageBackg});
  background-size: cover;
  background-position: center;
  min-height: 80vh;
  display: flex;
  justify-content: flex-start; /* Alinhando para a esquerda */
  align-items: flex-start; /* Alinhando para o topo */
  flex-direction: column;
  color: #fff;
  text-align: left; /* Alinhando o texto à esquerda */
  padding: 2rem;

  & > p,
  & > h2 {
    /* Limitar a largura do conteúdo de texto a 50% */
    max-width: 50%;
    width: 45%;
    margin-left: 1rem; /* Garantindo que o texto fique à esquerda */
  }

  & > p:first-child {
    font-size: 1.4rem;  /* Diminuindo o tamanho da fonte */
    line-height: 2rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  & > h2 {
    font-size: clamp(1.8rem, 5vw, 3.3rem); /* Ajustando o tamanho da fonte */
    max-width: 735px;
    margin: 1rem 0;
    margin-left: 1rem;
  }

  & > p:last-of-type {
    max-width: 1000px;
    line-height: 1.6;
    letter-spacing: 0.1rem;
    margin-bottom: 1.5rem;
  }
`;

function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <StyledBanner>
      <p data-aos="fade-right">Encontre o equilíbrio emocional</p>
      <h2 data-aos="fade-right">Neque porro quisquam 
      est qui dolorem</h2>
      <p data-aos="fade-right">
        Você encontra uma equipe de profissionais dedicados a ajudá-lo.
        Oferecemos tratamentos personalizados e eficazes para ajudá-lo a lidar com seus problemas.
      </p>
    </StyledBanner>
  );
}

export default Banner;
