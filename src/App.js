import React from "react";
import SearchBar from "./pages/SearchBar";
import BeerList from "./pages/BeerList";
import BeerCard from "./components/styles/BeerCard";
import MainPage from "./pages/MainPage";
import LogInPage from "./pages/LogInPage";
import AddBeerPage from "./pages/AddBeerPage";
import Footer from "./components/styles/Footer";
import { GlobalStyle } from "./components/styles/GlobalStyle";

const App = (props) => {
  return (
    <>
      <AddBeerPage />
      <MainPage />
      <LogInPage />
      <SearchBar />
      <BeerList />
      <BeerCard />
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default App;
