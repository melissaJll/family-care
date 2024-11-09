import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importando o CSS de animações do AOS
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Sobre from "./components/Sobre";
import Beneficios from "./components/Beneficios";
import Funcionalidades from "./components/Funcionalidades";
import Depoimentos from "./components/Depoimentos";
import Rodape from "./components/Rodape";

const AppContainer = styled.div`
  background-color: #F9FAFC;
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração das animações (em ms)
      once: true,     // Define para animar apenas na primeira vez que o elemento entra na viewport
    });
  }, []);

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
