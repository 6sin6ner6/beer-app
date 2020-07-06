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
  &:hover {
    background: transparent;
    border: 2px solid white;
    color: white;
  }
`;

export default CloseButton;
