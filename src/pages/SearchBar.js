import React from "react";
import Search from "../components/styles/Search";
import Sort from "../components/styles/Sort";
import SearchBarWrapper from "../components/styles/SearchBarWrapper";

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <Search />
      <Sort />
    </SearchBarWrapper>
  );
};

export default SearchBar;
