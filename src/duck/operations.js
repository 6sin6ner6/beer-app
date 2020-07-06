import actions from "./actions";

const fetchBeers = async () => {
  const response = await fetch("http://192.168.8.163:5050/api/beers", {
    method: "GET",
  });
  const json = await response.json();

  return json;
};

export const getAllBeers = () => async (dispatch) => {
  const beers = await fetchBeers();
  beers.map((beer) => dispatch(actions.addBeers(beer)));
};
