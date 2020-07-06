import types from "./types";

const INITIAL_STATE = {
  logInVisible: false,
  addBeerPage: false,
  beers: [],
  filteredBeers: [],
  sortType: "",
  searchValue: "",
};

const beersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_VISIBLE:
      return {
        ...state,
        logInVisible: true,
      };
    case types.LOGIN_INVISIBLE:
      return {
        ...state,
        logInVisible: false,
      };
    case types.SHOW_ADD_BEER_PAGE:
      return {
        ...state,
        addBeerPage: true,
        logInVisible: false,
      };
    case types.GET_SORT_TYPE:
      return {
        ...state,
        sortType: action.sortType,
      };
    case types.GET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.searchValue,
      };
    case types.ADD_BEERS:
      return {
        ...state,
        beers: [...state.beers, action.item],
        filteredBeers: [...state.beers, action.item],
      };
    case types.DISPLAY_SEARCHED:
      return {
        ...state,
        filteredBeers: state.beers.filter(
          (beer) =>
            beer.beerName
              .toLowerCase()
              .includes(state.searchValue.toLowerCase()) ||
            beer.beerType
              .toLowerCase()
              .includes(state.searchValue.toLowerCase())
        ),
      };

    case types.SORT_BEERS:
      if (state.sortType === "nameAscending") {
        return {
          ...state,
          filteredBeers: [
            ...state.filteredBeers.sort((a, b) =>
              a.beerName > b.beerName ? 1 : -1
            ),
          ],
        };
      } else if (state.sortType === "nameDescending") {
        return {
          ...state,
          filteredBeers: [
            ...state.filteredBeers.sort((a, b) =>
              a.beerName < b.beerName ? 1 : -1
            ),
          ],
        };
      } else if (state.sortType === "ratingDescending") {
        return {
          ...state,
          filteredBeers: [
            ...state.filteredBeers.sort((a, b) =>
              a.beerRating < b.beerRating ? 1 : -1
            ),
          ],
        };
      } else if (state.sortType === "ratingAscending") {
        return {
          ...state,
          filteredBeers: [
            ...state.filteredBeers.sort((a, b) =>
              a.beerRating > b.beerRating ? 1 : -1
            ),
          ],
        };
      } else if (state.sortType === "newest") {
        return {
          ...state,
          filteredBeers: [
            ...state.filteredBeers.sort((a, b) => (a.date < b.date ? 1 : -1)),
          ],
        };
      }
      break;
    default:
      return state;
  }
};

export default beersReducer;
