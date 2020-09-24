import styled from "styled-components";
import img from "../../img/arrow.png";
import React from "react";
import actions from "../../duck/actions";
import { connect } from "react-redux";

const SortBar = styled.select`
  height: 60px;
  font-size: 35px;
  border-radius: 30px;
  width: 330px;
  padding-left: 20px;
  cursor: pointer;
  appearance: none;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 35px;
  background-position: 280px center;
  @media (max-width: 575.98px) {
    width: 80%;
    height: 40px;
    background-position: 235px center;
    font-size: 30px;
  }
  @media (max-width: 767.98px) and (min-device-aspect-ratio: 1/1) {
    width: 60%;
    background-position: 220px center;
  }
`;

const Sort = ({ getSortType, sortBeers }) => {
  return (
    <SortBar
      onChange={(e) => {
        getSortType(e.target.value);
        sortBeers();
      }}
    >
      <option value="newest">Najnowsze</option>
      <option value="nameAscending">Po nazwie A-Z</option>
      <option value="nameDescending">Po nazwie Z-A</option>
      <option value="ratingDescending">Ocena malejąco</option>
      <option value="ratingAscending">Ocena rosnąco</option>
    </SortBar>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getSortType: (sortType) => dispatch(actions.getSortType(sortType)),
  sortBeers: (sortType) => dispatch(actions.sortBeers(sortType)),
});
const mapStateToProps = (state) => {
  return { sortType: state.sortType };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
