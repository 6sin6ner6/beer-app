import styled from "styled-components";
import { connect } from "react-redux";
import React from "react";

const SearchBarWrapper = styled.div`
  display: ${(props) => (props.addBeerPage ? "none" : "flex")};
  justify-content: space-around;
  align-items: center;
  height: 160px;
  width: 1080px;
  margin: 50px auto;
`;

const SearchBar = ({ addBeerPage }) => {
  return <SearchBarWrapper addBeerPage={addBeerPage} />;
};

const mapStateToProps = (state) => ({
  addBeerPage: state.addBeerPage,
});

export default connect(mapStateToProps, null)(SearchBar);
