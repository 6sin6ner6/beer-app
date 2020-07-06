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
`;

const Search = ({ getSearchValue, displaySearched, searchValue }) => {
  return (
    <SearchInput
      onChange={(e) => {
        getSearchValue(e.target.value);
        displaySearched();
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
