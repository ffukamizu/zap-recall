import Header from "./Header";
import Question from "./Question";
import Footer from "./Footer";

import "./../../public/css/reset.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";

import cards from "./../questions";

export default function App() {
  let [cardCounter, setCardCounter] = useState(0);
  const deckSize = cards.length;

  return (
    <div>
      <GlobalStyle />
      <AppPage>
        <Header />
        <QuestionContainer>
          {cards.map((card, index) => (
            <Question key={index} index={index} question={card.question} answer={card.answer} cardCounter={cardCounter} setCardCounter={setCardCounter} />
          ))}
        </QuestionContainer>
        <Divider></Divider>
        <Footer counter={cardCounter} deckSize={deckSize} />
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

const QuestionContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Divider = styled.div`
  height: 70px;
  width: 100%;
`;
