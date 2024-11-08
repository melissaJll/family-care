// src/App.jsx
import React from "react";
import Cabecalho from "./components/Cabecalho";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Sobre from "./components/Sobre";
import Beneficios from "./components/Beneficios";
import Funcionalidades from "./components/Funcionalidades";
import Depoimentos from "./components/Depoimentos";
import Rodape from "./components/Rodape";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: #F9FAFC;
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Menu />
      <Banner />
      <Sobre />
      <Beneficios />
      <Funcionalidades />
      <Depoimentos />
      <Rodape />
    </AppContainer>
  );
}

export default App;
