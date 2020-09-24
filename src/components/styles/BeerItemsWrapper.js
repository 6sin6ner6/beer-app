import styled from "styled-components";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import actions from "../../duck/actions";
import { getAllBeers } from "../../duck/operations";
import { BeerItemWrapper, BeerImage, BeerName, BeerType } from "./BeerItem";
import Stars from "./RatingStars";
import Spinner from "./Spinner";

const PageWrapper = styled.div`
  width: 100%;
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
  }, [getAllBeers]);

  return (
    <PageWrapper addBeerPage={addBeerPage}>
      <Spinner />
      {beers.reverse().map((beer) => {
        return (
          <BeerItemWrapper key={beer._id}>
            <BeerImage
              src={`data:image/jpeg;base64,${beer.image.buffer}`}
              alt={beer._id}
              onClick={(e) => {
                showBeerCard(e.target.alt);
              }}
            />
            <BeerName>{beer.beerName}</BeerName>
            <BeerType>{beer.beerType}</BeerType>
            <Stars rating={beer.beerRating} />
          </BeerItemWrapper>
        );
      })}
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
