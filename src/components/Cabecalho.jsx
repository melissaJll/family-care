import Menu from "./Menu";
// Impportação da lib styled components
import styled from "styled-components";

//Especifica que será dentro do header``
const StyledCabecalho = styled.header`
  //header{
  background-color: #bbd6b4;
  color: #fcf6f6;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  hr {
    background-color: #7a4ca5;
    width: 50%;
    border: none;
    height: 4px;
    margin: 8px auto;
  }
`;

function Cabecalho() {
  return (
    <StyledCabecalho>
      
      <hr />
      <Menu />
    </StyledCabecalho>
  );
}

export default Cabecalho;
