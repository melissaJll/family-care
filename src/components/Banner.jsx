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
    width: 50%;
    margin-left: 0; /* Garantindo que o texto fique à esquerda */
  }

  & > p:first-child {
    font-size: 1.8rem;
    line-height: 2.5rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  & > h2 {
    font-size: clamp(2rem, 6vw, 4rem);
    max-width: 735px;
    margin: 1rem 0;
  }

  & > p:last-of-type {
    max-width: 1000px;
    line-height: 1.6;
    letter-spacing: 0.1rem;
    margin-bottom: 1.5rem;
  }

  & > a {
    display: inline-block;
    background: #415da1;
    border-radius: 5px;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 14px 24px;
    color: #fff;
    text-decoration: none;
    transition: background 0.3s ease;
    margin-top: 1.5rem;

    &:hover {
      background: #364a82;
    }
  }
`;

function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <StyledBanner>
      <p data-aos="fade-right">Encontre o equilíbrio emocional</p>
      <h2 data-aos="fade-right">O seu bem-estar mental é a nossa prioridade</h2>
      <p data-aos="fade-right">
        Você encontra uma equipe de profissionais dedicados a ajudá-lo.
        Oferecemos tratamentos personalizados e eficazes para ajudá-lo a lidar com seus problemas.
      </p>
      <a href="servicos.html" data-aos="fade-right">Nossos Serviços</a>
    </StyledBanner>
  );
}

export default Banner;
