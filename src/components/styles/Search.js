import styled from "styled-components";
import img from "../../img/search.png";
import React from "react";
import actions from "../../duck/actions";
import { connect } from "react-redux";

const SearchInput = styled.input`
  border-radius: 30px;
  height: 60px;
  width: 350px;
  font-size: 35px;
  padding-left: 20px;
  cursor: text;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 35px;
  background-position: 300px center;
  @media (max-width: 575.98px) {
    width: 80%;
    height: 50px;
    background-position: 235px center;
  }
  @media (max-width: 767.98px) and (orientation: landscape) {
    width: 60%;
    background-position: 220px center;
    margin-right: 20px;
  }
`;

const Search = ({
  getSearchValue,
  displaySearched,
  searchValue,
  sortBeers,
}) => {
  return (
    <SearchInput
      onChange={(e) => {
        getSearchValue(e.target.value);
        displaySearched();
        sortBeers();
      }}
      placeholder="Wyszukaj piwo..."
      value={searchValue}
    />
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { searchValue: state.searchValue };
};
const mapDispatchToProps = (dispatch) => ({
  getSearchValue: (searchValue) =>
    dispatch(actions.getSearchValue(searchValue)),
  displaySearched: (searchValue) =>
    dispatch(actions.displaySearched(searchValue)),
  sortBeers: (sortType) => dispatch(actions.sortBeers(sortType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
