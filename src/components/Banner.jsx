import styled from "styled-components";


// Estilo para o Banner
const StyledBanner = styled.div`
  position: relative;
  width: 100%;
  height: 400px; /* Altura do banner */
  background-image: url('https://via.placeholder.com/1200x400'); /* Substitua pela URL da imagem desejada */
  background-size: cover; /* Ajusta a imagem para cobrir todo o componente */
  background-position: center; /* Centraliza a imagem */

  // Estilo para o texto sobreposto
  & > h1 {
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%); /* Centraliza o texto */
    color: #c57676; /* Cor do texto */
    font-size: 2rem; /* Tamanho da fonte */
    text-align: center;
    width: 50%; /* Ocupar apenas 50% da largura */
    background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente para melhor legibilidade */
    padding: 10px; /* Espaçamento interno */
  }
`;

// Componente Banner
function Banner() {
  return (
    <StyledBanner>
      <h1>Bem-vindo ao nosso site!</h1>
    </StyledBanner>
  );
}

export default Banner;
