import styled from "styled-components";

const LogInButton = styled.button`
  display: inline-block;
  border: 3px solid #d42919;
  color: black;
  background-color: #d42919;
  font-size: 40px;
  padding: 5px 50px;
  border-radius: 50px;
  margin-top: 30px;
  cursor: pointer;
  transition: 0.2s linear;
  &:hover {
    background-color: transparent;
    box-shadow: 0 0 10px 0 #d42919 inset, 0 0 10px 4px #d42919;
  }
  @media (max-width: 575.98px) {
    font-size: 25px;
    height: 40px;
    padding: 0px 40px;
    margin-bottom: 20px;
  }
  @media (max-width: 767.98px) and (orientation: landscape) {
    font-size: 25px;
    height: 50px;
    margin-left: -60px;
  }
`;

export default LogInButton;
