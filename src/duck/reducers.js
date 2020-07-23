import types from "./types";

const INITIAL_STATE = {
  logInVisible: false,
  addBeerPage: false,
  beerCard: false,
  beers: [],
  beerCardContent: [],
  filteredBeers: [],
  access: [],
  sortType: "",
  searchValue: "",
  beerImage: null,
  beerRating: "",
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
    case types.GET_LOGIN:
      return {
        ...state,
        [action.name]: action.value,
      };
    case types.GET_PASSWORD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case types.SHOW_ADD_BEER_PAGE:
      if (
        state.access[0].login === state.login &&
        state.access[0].password === state.password
      ) {
        return {
          ...state,
          addBeerPage: true,
          logInVisible: false,
        };
      } else return { ...state };

    case types.SHOW_BEER_CARD:
      return {
        ...state,
        beerCard: true,
        beerCardContent: state.beers.filter((beer) =>
          beer._id.includes(action.id)
        ),
      };
    case types.CLOSE_BEER_CARD:
      return {
        ...state,
        beerCard: false,
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
    case types.ADD_ACCESS:
      return {
        ...state,
        access: [...state.access, action.item],
      };
    case types.ADD_BEER_IMAGE:
      return {
        ...state,
        beerImage: action.image,
      };
    case types.ADD_RATING:
      return {
        ...state,
        beerRating: action.rating,
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
            ...state.filteredBeers.sort((a, b) => {
              if (a.beerName.toLowerCase() < b.beerName.toLowerCase())
                return -1;
              if (a.beerName.toLowerCase() > b.beerName.toLowerCase()) return 1;
              else return state;
            }),
          ],
        };
      } else if (state.sortType === "nameDescending") {
        return {
          ...state,
          filteredBeers: [
            ...state.filteredBeers.sort((a, b) => {
              if (a.beerName.toLowerCase() > b.beerName.toLowerCase())
                return -1;
              else if (a.beerName.toLowerCase() < b.beerName.toLowerCase())
                return 1;
              else return state;
            }),
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
