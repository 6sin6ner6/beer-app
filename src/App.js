import React from "react";
import { connect } from "react-redux";
import SearchBar from "./pages/SearchBar";
import BeerList from "./pages/BeerList";
import MainPage from "./pages/MainPage";
import LogInPage from "./pages/LogInPage";
import { GlobalStyle } from "./components/styles/GlobalStyle";

const App = (props) => {
  return (
    <>
      <MainPage />
      {props.visible ? <LogInPage /> : null}
      <SearchBar />
      <BeerList />
      <GlobalStyle />
    </>
  );
};

const mapStateToProps = (state) => {
  return { visible: state.visible };
};

export default connect(mapStateToProps)(App);
