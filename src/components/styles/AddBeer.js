import styled from "styled-components";
import React from "react";
import rating from "../../img/rating-stars.png";
import Input from "./Input";
import LogInButton from "./LogInButton";
import beer from "../../img/beer4.jpg";

const AddBeerWrapper = styled.div`
  background-image: url(${beer});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CenterWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: -60px;
  height: 80px;
  width: 550px;
`;

const BeerDescription = styled.textarea`
  font-size: 30px;
  border-radius: 20px;
  resize: none;
  width: 550px;
  height: 500px;
  margin-top: 20px;
  padding: 15px;
  border: 2px solid #d42919;
  background: rgba(0, 0, 0, 0.5);
  color: white;
`;

const BeerRating = styled.img`
  position: absolute;
  left: 100px;
`;

const FileLoad = styled(LogInButton)`
  font-size: 20px;
  margin-right: 15px;
  border: 3px solid #3483eb;
  background-color: #3483eb;
  &:hover {
    background-color: transparent;
    box-shadow: 0 0 10px 0 #3483eb inset, 0 0 10px 4px #3483eb;
  }
`;

const Submit = styled(LogInButton)`
  margin-left: 900px;
`;

const AddBeerForm = ({ name, type, description }) => (
  <>
    <AddBeerWrapper>
      <div>
        <Input name="beerName" placeholder="Nazwa piwa..." />
        <Input name="beerType" placeholder="Gatunek piwa..." />
      </div>
      <BeerDescription name="beerDescription" placeholder="Opis piwa..." />
      <CenterWrapper>
        <label style={{ fontSize: "35px", color: "white" }} for="rating">
          Ocena:
        </label>
        <BeerRating id="rating" src={rating} />
      </CenterWrapper>
      <CenterWrapper>
        <FileLoad id="file">Wybierz plik...</FileLoad>
        <label style={{ fontSize: "35px", color: "white" }} for="file">
          Nie wybrano pliku
        </label>
      </CenterWrapper>
      <Submit>Dodaj piwo!</Submit>
    </AddBeerWrapper>
  </>
);

export default AddBeerForm;
