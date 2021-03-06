import styled from "styled-components";

const Input = styled.input`
  display: inline-block;
  background: transparent;
  font-size: 30px;
  height: 60px;
  width: 250px;
  margin: 15px 20px 0 20px;
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid #d42919;
  border-radius: 20px;
  padding: 0 10px;
  color: white;
  @media (max-width: 575.98px) {
    width: 40%;
    height: 70%;
    margin: 15px 15px 0 15px;
    font-size: 25px;
  }
`;

export default Input;
