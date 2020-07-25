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

const FileLoad = styled.input`
  font-size: 30px;
  margin-right: 15px;
  margin-top: 30px;
  color: white;
  border-radius: 50px;
`;

const Submit = styled(LogInButton)`
  margin-left: 900px;
`;
const reload = () => {
  window.location.reload();
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const form = document.getElementById("beerForm");
  const data = new FormData(form);
  data.append("date", new Date());
  fetch("http://192.168.8.163:5050/api/beers", {
    method: "POST",
    body: data,
  });
  form.reset();
};

const AddBeerForm = ({
  addBeerPage,
  addBeerImage,
  beerRating,
  resetRating,
}) => (
  <>
    <AddBeerWrapper
      onSubmit={onFormSubmit}
      addBeerPage={addBeerPage}
      id="beerForm"
    >
      <div>
        <Input type="text" name="beerName" placeholder="Nazwa piwa..." />
        <Input type="text" name="beerType" placeholder="Gatunek piwa..." />
        <Input
          type="text"
          name="beerRating"
          value={beerRating}
          style={{ display: "none" }}
        />
      </div>
      <BeerDescription name="beerDescription" placeholder="Opis piwa..." />
      <CenterWrapper>
        <label style={{ fontSize: "35px", color: "white" }} for="rating">
          Ocena:
        </label>
        <Rating />
      </CenterWrapper>
      <CenterWrapper>
        <FileLoad
          type="file"
          name="beerImage"
          required
          onChange={(e) => addBeerImage(e.target.files[0])}
        />
      </CenterWrapper>
      <Submit onClick={resetRating} type="submit">
        Dodaj piwo!
      </Submit>
      <Submit onClick={reload}>Powrót</Submit>
    </AddBeerWrapper>
  </>
);

const mapStateToProps = (state) => {
  return {
    addBeerPage: state.addBeerPage,
    beerImage: state.beerImage,
    beerRating: state.beerRating,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addBeerImage: (image) => dispatch(actions.addBeerImage(image)),
  resetRating: () => dispatch(actions.resetRating()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBeerForm);
