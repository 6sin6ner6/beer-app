import React from "react";
import { connect } from "react-redux";
import SearchBar from "./pages/SearchBar";
import BeerList from "./pages/BeerList";
import BeerCard from "./components/styles/BeerCard";
import MainPage from "./pages/MainPage";
import LogInPage from "./pages/LogInPage";
import AddBeerPage from "./pages/AddBeerPage";
import { GlobalStyle } from "./components/styles/GlobalStyle";

const App = (props) => {
  return (
    <>
      <AddBeerPage />
      <MainPage />
      {props.logInVisible ? <LogInPage /> : null}
      <SearchBar />
      <BeerList />
      <BeerCard />
      <GlobalStyle />
    </>
  );
};

const mapStateToProps = (state) => {
  return { logInVisible: state.logInVisible };
};

export default connect(mapStateToProps)(App);
