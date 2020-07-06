import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  border: 3px solid #d42919;
  color: black;
  background-color: #d42919;
  font-size: 40px;
  height: 100px;
  padding: 15px 50px;
  border-radius: 50px;
  margin: 300px 100px;
  cursor: pointer;
  transition: 0.2s linear;
  &:hover {
    background-color: transparent;
    box-shadow: 0 0 10px 0 #d42919 inset, 0 0 10px 4px #d42919;
  }
`;

export default Button;
