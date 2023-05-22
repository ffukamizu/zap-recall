import styled from "styled-components";

export default function Header() {
  return (
    <Logo>
      <img src="./public/assets/logo.png" alt="logo icon" />
      <h1>ZapRecall</h1>
    </Logo>
  );
}

const Logo = styled.div`
  height: 60px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  img {
    height: 60px;
    margin-right: 25px;
  }

  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    color: #ffffff;
    transform: rotate(0.58deg);
  }
`;
