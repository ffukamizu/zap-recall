import Header from "./Header";
import Question from "./Question";
import Footer from "./Footer";

import "./../../public/css/reset.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import cards from "./../questions";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <AppPage>
        <Header />
        {cards.map((card, index) => (
          <Question key={index} index={index} question={card.question} answer={card.answer} />
        ))}
        <Divider></Divider>
        <Footer />
      </AppPage>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
      background-color: #FB6B6B;
  }
`;

const AppPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 38px;
`;

const Divider = styled.div`
  height: 70px;
  width: 100%;
`;
