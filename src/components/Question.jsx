import styled from "styled-components";
import { useState } from "react";

export default function Question(props) {
  const { index, question, answer } = props;

  let [cardState, setCardState] = useState(true);
  let [questionState, setQuestionState] = useState(false);
  let [answerState, setAnswerState] = useState(false);

  function flipCard() {
    setCardState(false);
    setQuestionState(true);
  }

  function getAnswer() {
    setQuestionState(false);
    setAnswerState(true);
  }

  return (
    <div>
      <QuestionContainer state={cardState} onClick={() => flipCard()}>
        <p>Pergunta {index + 1}</p>
        <ion-icon name="play-outline"></ion-icon>
      </QuestionContainer>
      <FlippedQuestion state={questionState}>
        <p>{question}</p>
        <ion-icon onClick={() => getAnswer()} name="refresh-outline"></ion-icon>
      </FlippedQuestion>
      <FlippedAnswer state={answerState}>
        <p>{answer}</p>
        <div>
          <RedButton>
            <button>Não lembrei</button>
          </RedButton>
          <YellowButton>
            <button>Quase não lembrei</button>
          </YellowButton>
          <GreenButton>
            <button>Zap!</button>
          </GreenButton>
        </div>
      </FlippedAnswer>
    </div>
  );
}

const QuestionContainer = styled.div`
  height: 131px;
  width: 400px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  padding-inline: 15px;
  margin-block: 12px;
  display: ${(props) => (props.state ? "flex" : "none")};

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    overflow-wrap: break-word;
  }

  ion-icon {
    font-size: 28px;
    color: #333333;
    --ionicon-stroke-width: 40px;
  }
`;

const FlippedQuestion = styled.div`
  height: 131px;
  width: 400px;
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
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }

  ion-icon {
    font-size: 28px;
    color: #333333;
    --ionicon-stroke-width: 40px;
    position: absolute;
    bottom: 15px;
    right: 15px;
  }
`;

const FlippedAnswer = styled.div`
  height: 131px;
  width: 400px;
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
  }

  div {
    height: 37px;
    width: 270px;
    display: flex;
    justify-content: space-between;
    bottom: 15px;
    left: 50px;
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
