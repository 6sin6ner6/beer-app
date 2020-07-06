import types from "./types";

const logInVisible = () => ({
  type: types.LOGIN_VISIBLE,
});
const logInInvisible = () => ({
  type: types.LOGIN_INVISIBLE,
});

const showAddBeerPage = () => ({
  type: types.SHOW_ADD_BEER_PAGE,
});

const addBeers = (item) => ({
  type: types.ADD_BEERS,
  item,
});

const sortBeers = (sortType) => ({
  type: types.SORT_BEERS,
  sortType,
});

const getSortType = (sortType) => ({
  type: types.GET_SORT_TYPE,
  sortType,
});
const getSearchValue = (searchValue) => ({
  type: types.GET_SEARCH_VALUE,
  searchValue,
});

const displaySearched = (searchValue) => ({
  type: types.DISPLAY_SEARCHED,
  searchValue,
});

export default {
  logInVisible,
  logInInvisible,
  addBeers,
  sortBeers,
  getSortType,
  getSearchValue,
  displaySearched,
  showAddBeerPage,
};
