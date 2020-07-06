import styled from "styled-components";
import { connect } from "react-redux";
import React from "react";
import Search from "../../components/styles/Search";
import Sort from "../../components/styles/Sort";

const SearchBarWrapper = styled.div`
  display: ${(props) => (props.addBeerPage ? "none" : "flex")};
  justify-content: space-around;
  align-items: center;
  height: 160px;
  width: 1080px;
  margin: 50px auto;
`;

const SearchBar = ({ addBeerPage }) => {
  return (
    <SearchBarWrapper addBeerPage={addBeerPage}>
      <Search />
      <Sort />
    </SearchBarWrapper>
  );
};

const mapStateToProps = (state) => ({
  addBeerPage: state.addBeerPage,
});

export default connect(mapStateToProps, null)(SearchBar);
