import styled from "styled-components";
import { useState } from "react";

export default function Question(props) {
  let { index, question, answer, cardCounter, setCardCounter } = props;

  let [cardState, setCardState] = useState(true);
  let [questionState, setQuestionState] = useState(false);
  let [answerState, setAnswerState] = useState(false);
  let [buttonPressed, setButtonPressed] = useState("#333333");
  let [statusIcon, setStatusIcon] = useState("play-outline");
  let [buttonDisable, setButtonDisable] = useState(false);
  let [dataTestValue, setDataTestValue] = useState('');

  function flipCard() {
    setCardState(false);
    setQuestionState(true);
  }

  function getAnswer() {
    setQuestionState(false);
    setAnswerState(true);
  }

  function getRedButton() {
    cardCounter++;
    setCardState(true);
    setAnswerState(false);
    setButtonPressed("#FF3030");
    setStatusIcon("close-circle");
    setButtonDisable(true);
    setCardCounter(cardCounter);
    setDataTestValue("no-icon");
  }

  function getYellowButton() {
    cardCounter++;
    setCardState(true);
    setAnswerState(false);
    setButtonPressed("#FF922E");
    setStatusIcon("help-circle");
    setButtonDisable(true);
    setCardCounter(cardCounter);
    setDataTestValue("partial-icon");
  }

  function getGreenButton() {
    cardCounter++;
    setCardState(true);
    setAnswerState(false);
    setButtonPressed("#2FBE34");
    setStatusIcon("checkmark-circle");
    setButtonDisable(true);
    setCardCounter(cardCounter);
    setDataTestValue("zap-icon");
  }

  return (
    <div>
      <QuestionContainer click={buttonPressed} state={cardState}  data-test="flashcard" >
        <p data-test="flashcard-text">Pergunta {index + 1}</p>
        <button disabled={buttonDisable} onClick={() => flipCard()} data-test="play-btn"><ion-icon  name={statusIcon} data-test={dataTestValue}></ion-icon></button>
      </QuestionContainer>
      <FlippedQuestion state={questionState} data-test="flashcard">
        <p data-test="flashcard-text">{question}</p>
        <button onClick={() => getAnswer()} data-test="turn-btn"><img src='./public/assets/seta_virar.png' alt='virar'></img></button>
      </FlippedQuestion>
      <FlippedAnswer state={answerState} data-test="flashcard">
        <p data-test="flashcard-text">{answer}</p>
        <div>
          <RedButton>
            <button onClick={() => getRedButton()} data-test="no-btn">
              Não lembrei
            </button>
          </RedButton>
          <YellowButton>
            <button onClick={() => getYellowButton()} data-test="partial-btn">
              Quase não lembrei
            </button>
          </YellowButton>
          <GreenButton>
            <button onClick={() => getGreenButton()} data-test="zap-btn">
              Zap!
            </button>
          </GreenButton>
        </div>
      </FlippedAnswer>
    </div>
  );
}

const QuestionContainer = styled.div`
  height: 65px;
  width: 300px;
  max-width: 600px;
  min-width: 300px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  padding-inline: 15px;
  margin-block: 12px;
  border-style: solid;
  border-color: #ffffff;
  display: ${(props) => (props.state ? "flex" : "none")};
  text-decoration: ${(props) => (props.click !== "#333333" ? "line-through" + props.click : "none")};

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.click};
    text-decoration-color: ${(props) => props.click};
    overflow-wrap: break-word;
  }

  button {
    background: #ffffff;
    border-style: solid;
    border-color: #ffffff;
  }

  ion-icon {
    font-size: 28px;
    color: #333333;
    --ionicon-stroke-width: 40px;
    color: ${(props) => props.click};
  }
`;

const FlippedQuestion = styled.div`
  height: 131px;
  width: 300px;
  max-width: 600px;
  min-width: 300px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 15px;
  margin-block: 12px;
  flex-direction: column;
  overflow-wrap: break-word;
  position: relative;
  display: ${(props) => (props.state ? "flex" : "none")};

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }

  button {
    background: #ffffd5;
    border-style: solid;
    border-color: #ffffd5;
  }

  img {
    height: 17px;
    position: absolute;
    bottom: 15px;
    right: 15px;
  }

  ion-icon {
    font-size: 28px;
    color: #333333;
    --ionicon-stroke-width: 40px;
  }
`;

const FlippedAnswer = styled.div`
  height: 131px;
  width: 300px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 15px;
  margin-block: 12px;
  flex-direction: column;
  text-overflow: wrap;
  display: ${(props) => (props.state ? "flex" : "none")};

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    min-height: 95px;
    max-height: 95px;
  }

  div {
    height: 37px;
    width: 270px;
    display: flex;
    justify-content: space-between;
    margin-left: 1px;
    gap: 19px;
    position: relative;
  }
`;

const GreenButton = styled.div`
  button {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #ffffff;
    width: 85px;
    height: 37px;
    background: #2fbe34;
    border-radius: 5px;
    border-style: solid;
    border-color: #2fbe34;
  }
`;

const YellowButton = styled.div`
  button {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    width: 85px;
    height: 37px;
    background: #ff922e;
    border-radius: 5px;
    border-style: solid;
    border-color: #ff922e;
  }
`;

const RedButton = styled.div`
  button {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    width: 85px;
    height: 37px;
    background: #ff3030;
    border-radius: 5px;
    border-style: solid;
    border-color: #ff3030;
  }
`;
