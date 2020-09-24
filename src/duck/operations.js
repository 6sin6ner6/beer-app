import actions from "./actions";

const fetchBeers = async () => {
  const response = await fetch(
    "https://beer-app-server2.herokuapp.com/api/beers",
    {
      method: "GET",
    }
  );

  const json = await response.json();
  return json;
};
const fetchAccess = async () => {
  const response = await fetch(
    "https://beer-app-server2.herokuapp.com/api/access",
    {
      method: "GET",
    }
  );
  const json = await response.json();

  return json;
};

export const getAllBeers = () => async (dispatch) => {
  const beers = await fetchBeers();
  if (beers) {
    dispatch(actions.loadingIsFalse());
  }
  beers.map((beer) => dispatch(actions.addBeers(beer)));
};
export const getAccess = () => async (dispatch) => {
  const access = await fetchAccess();
  access.map((item) => dispatch(actions.addAccess(item)));
};

// const mapDispatchToProps = (dispatch) => ({
//   loadingIsFalse: () => dispatch(actions.loadingIsFalse()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(fetchBeers);
