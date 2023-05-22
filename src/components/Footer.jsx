import styled from "styled-components";

export default function Footer(props) {
    let {counter, deckSize} = props;
  return (
    <FooterBar data-test="footer">
      <p>
        {counter}/{deckSize} CONCLUÍDOS
      </p>
    </FooterBar>
  );
}

const FooterBar = styled.footer`
  height: 70px;
  width: 100%;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0px;
  margin-top: 146px;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }
`;
 