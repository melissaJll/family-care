// src/Sobre.jsx
import styled from "styled-components";

const StyledSobre = styled.div`
  text-align: center; /* Centraliza o texto do título principal */
  margin: 20px;

  h1 {
    font-family: 'Plus Jakarta Sans', sans-serif; /* Usando a fonte Jakarta Plus */
    font-size: 2.5rem; /* Tamanho do título principal */
  }

  .content {
    display: flex; /* Usando flexbox para alinhar a imagem e o texto lado a lado */
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    img {
      width: 200px; /* Tamanho da imagem */
      height: auto; /* Mantém a proporção da imagem */
      margin-right: 20px; /* Espaçamento à direita da imagem */
    }

    .text-section {
      text-align: left; /* Alinha o texto à esquerda */
      
      h2 {
        font-family: 'Plus Jakarta Sans', sans-serif; /* Fonte para o subtítulo */
        font-size: 1.5rem; /* Tamanho do subtítulo */
      }

      p {
        font-size: 1rem; /* Tamanho do texto */
        color: #666; /* Cor do texto */
      }
    }
  }
`;

function Sobre() {
  return (
    <StyledSobre>
      <h1>Sobre</h1>
      <div className="content">
        <img src="https://via.placeholder.com/200" alt="Descrição da imagem" /> {/* Imagem provisória online */}
        <div className="text-section">
          <h2>Quem Somos</h2> {/* Título à direita */}
          <p>Somos uma empresa dedicada a oferecer as melhores soluções para nossos clientes.</p> {/* Texto abaixo do título */}
        </div>
      </div>
    </StyledSobre>
  );
}

export default Sobre;
