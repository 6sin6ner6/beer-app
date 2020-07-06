import styled from "styled-components";
// import React, { useRef } from "react";
import img from "../../img/beer3.jpg";

const MainPageWrapper = styled.div`
  text-align: center;
  height: 100vh;
  position: relative;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Title = styled.h1`
  position: absolute;
  color: black;
  top: 320px;
  left: 50%;
  transform: translate(-50%);
  font-size: 100px;
  font-weight: 200;
`;

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
// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetHeight);

// const MainPage = () => {
//   const myRef = useRef(null);
//   const executeScroll = () => scrollToRef(myRef);
//   return (
//     <Wrapper ref={myRef}>
//       <Title>Piwa wypite i ocenione</Title>
//       <Button onClick={executeScroll}>Zobacz piwa</Button>
//       <Button>Logowanie</Button>
//     </Wrapper>
//   );
// };

// export default MainPage;

export { MainPageWrapper, Title, Button };
