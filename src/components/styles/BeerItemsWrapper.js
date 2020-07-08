import styled from "styled-components";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import actions from "../../duck/actions";
import { getAllBeers } from "../../duck/operations";
import {
  BeerItemWrapper,
  BeerImage,
  BeerName,
  BeerType,
  Rating,
} from "./BeerItem";
import img from "../../img/beer2.jpg";
import rating from "../../img/rating-stars.png";

const PageWrapper = styled.div`
  width: 1600px;
  margin: 10px auto;
  display: ${(props) => (props.addBeerPage ? "none" : "flex")};
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-around;
`;

const BeerItemsWrapper = ({
  beers,
  getAllBeers,
  addBeerPage,
  showBeerCard,
}) => {
  useEffect(() => {
    getAllBeers();
  }, []);

  return (
    <PageWrapper addBeerPage={addBeerPage}>
      {beers.map((beer) => (
        <BeerItemWrapper
          key={beer._id}
          onClick={(e) => {
            showBeerCard(e.target.alt);
          }}
        >
          <BeerImage src={img} alt={beer._id} />
          <BeerName>{beer.beerName}</BeerName>
          <BeerType>{beer.beerType}</BeerType>
          <Rating src={rating} />
        </BeerItemWrapper>
      ))}
    </PageWrapper>
  );
};

const mapStateToProps = (state) => ({
  beers: state.filteredBeers,
  addBeerPage: state.addBeerPage,
});

const mapDispatchToProps = (dispatch) => ({
  getAllBeers: () => dispatch(getAllBeers()),
  showBeerCard: (id) => dispatch(actions.showBeerCard(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerItemsWrapper);
