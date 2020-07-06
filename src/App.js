import React from "react";
import { connect } from "react-redux";
import SearchBar from "./pages/SearchBar";
import BeerList from "./pages/BeerList";
import MainPage from "./pages/MainPage";
import LogInPage from "./pages/LogInPage";
import AddBeerPage from "./pages/AddBeerPage";
import { GlobalStyle } from "./components/styles/GlobalStyle";

const App = (props) => {
  return (
    <>
      {props.addBeerPage ? (
        <AddBeerPage />
      ) : (
        <>
          <MainPage />
          {props.logInVisible ? <LogInPage /> : null}
          <SearchBar />
          <BeerList />
        </>
      )}
      <GlobalStyle />
    </>
  );
};

const mapStateToProps = (state) => {
  return { logInVisible: state.logInVisible, addBeerPage: state.addBeerPage };
};

export default connect(mapStateToProps)(App);
