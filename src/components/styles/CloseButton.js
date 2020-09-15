import styled from "styled-components";

const CloseButton = styled.button`
  position: fixed;
  top: -5%;
  right: 3%;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: white;
  font-size: 30px;
  border: none;
  margin-top: 50px;
  cursor: pointer;
  transition: 0.3s;
  outline: none;
  &:hover {
    background: transparent;
    border: 2px solid white;
    color: white;
  }
  @media (max-width: 575.98px) {
    top: -10%;
    right: 5%;
    width: 40px;
    height: 40px;
  }
  @media (max-width: 767.98px) and (orientation: landscape) {
    top: 51%;
    right: 20%;
  }
`;

export default CloseButton;
