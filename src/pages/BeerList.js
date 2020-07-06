import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllBeers } from "../duck/operations";
import {
  BeerItemWrapper,
  BeerImage,
  BeerName,
  BeerType,
  Rating,
} from "../components/styles/BeerItem";
import img from "../img/beer2.jpg";
import rating from "../img/rating-stars.png";
import BeerItemsWrapper from "../components/styles/BeerItemsWrapper";

const BeerList = ({ beers, getAllBeers }) => {
  useEffect(() => {
    getAllBeers();
  }, []);
  return (
    <BeerItemsWrapper>
      {beers.map((beer) => (
        <BeerItemWrapper>
          <BeerImage src={img} />
          <BeerName>{beer.beerName}</BeerName>
          <BeerType>{beer.beerType}</BeerType>
          <Rating src={rating} />
        </BeerItemWrapper>
      ))}
    </BeerItemsWrapper>
  );
};

const mapStateToProps = (state) => ({
  beers: state.filteredBeers,
});

const mapDispatchToProps = (dispatch) => ({
  getAllBeers: () => dispatch(getAllBeers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
