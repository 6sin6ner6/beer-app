import styled from "styled-components";
import actions from "../../duck/actions";
import React from "react";
import { connect } from "react-redux";
import Input from "./Input";
import LogInButton from "./LogInButton";
import Rating from "./AddRating";
import beer from "../../img/beer4.jpg";
import FormData from "form-data";

const AddBeerWrapper = styled.form`
  background-image: url(${beer});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: ${(props) => (props.addBeerPage ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 575.98px) {
    justify-content: flex-start;
  }
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    height: 200vh;
  }
`;

const CenterWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: -60px;
  height: 80px;
  width: 550px;
  @media (max-width: 575.98px) {
    width: 90%;
    margin-top: 5px;
    margin-bottom: -70px;
  }
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
  @media (max-width: 575.98px) {
    width: 90%;
    height: 55%;
    font-size: 25px;
  }
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    width: 85%;
    height: 45%;
  }
`;

const FileLoad = styled.input`
  position: absolute;
  left: 0;
  font-size: 30px;
  margin-right: 15px;
  margin-top: 30px;
  color: white;
  @media (max-width: 575.98px) {
    margin-right: 0;
    font-size: 20px;
  }
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Button = styled(LogInButton)`
  margin-left: 900px;
  @media (max-width: 575.98px) {
    &:nth-child(1) {
      width: 53%;
    }
    margin: 80px 10px 0 0;
    height: 40px;
    width: 40%;
    font-size: 20px;
    text-align: center;
  }
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    margin: 80px 10px 0 0;
    height: 60px;
  }
`;

const Label = styled.label`
  font-size: 35px;
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  @media (max-width: 575.98px) {
    font-size: 25px;
  }
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    left: 25%;
  }
`;

const Success = styled.div`
  display: ${(props) => (props.addBeerSuccess ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100px;
  color: white;
  font-size: 70px;
  text-align: center;
  @media (max-width: 575.98px) {
    height: 75px;
    font-size: 35px;
    line-height: 75px;
  }
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    font-size: 40px;
    line-height: 80px;
    height: 80px;
  }
`;

const reload = () => {
  window.location.reload();
};

const onFormSubmit = (e, props) => {
  e.preventDefault();
  const form = document.getElementById("beerForm");
  const data = new FormData(form);
  data.append("date", new Date());
  fetch("https://beer-app-server2.herokuapp.com/api/beers", {
    method: "POST",
    body: data,
  });
  form.reset();
  props.resetRating();
  props.addingSuccess();
  let i = setInterval(props.addingSuccess, 2000);
  setTimeout(() => {
    clearInterval(i);
  }, 3000);
};

const AddBeerForm = ({
  addBeerPage,
  addBeerImage,
  beerRating,
  addingSuccess,
  resetRating,
  addBeerSuccess,
}) => (
  <>
    <AddBeerWrapper
      onSubmit={(e) => onFormSubmit(e, { addingSuccess, resetRating })}
      addBeerPage={addBeerPage}
      id="beerForm"
    >
      <Success addBeerSuccess={addBeerSuccess}>Piwo zostało dodane!</Success>
      <div>
        <Input
          type="text"
          name="beerName"
          placeholder="Nazwa piwa..."
          required
        />
        <Input type="text" name="beerType" placeholder="Gatunek piwa..." />
        <Input
          readOnly
          type="text"
          name="beerRating"
          value={beerRating}
          style={{ display: "none" }}
        />
      </div>
      <BeerDescription
        name="beerDescription"
        placeholder="Opis piwa..."
        maxLength="650"
      />
      <CenterWrapper>
        <Label HTMLfor="rating">Ocena:</Label>
        <Rating />
      </CenterWrapper>
      <CenterWrapper>
        <FileLoad
          type="file"
          name="beerImage"
          id="beerImage"
          required
          onChange={(e) => addBeerImage(e.target.files[0])}
        />
      </CenterWrapper>
      <div>
        <Button type="submit">Dodaj piwo!</Button>
        <Button onClick={reload}>Powrót</Button>
      </div>
    </AddBeerWrapper>
  </>
);

const mapStateToProps = (state) => {
  return {
    addBeerPage: state.addBeerPage,
    beerImage: state.beerImage,
    beerRating: state.beerRating,
    addBeerSuccess: state.addBeerSuccess,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addBeerImage: (image) => dispatch(actions.addBeerImage(image)),
  resetRating: () => dispatch(actions.resetRating()),
  addingSuccess: () => dispatch(actions.addingSuccess()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBeerForm);
