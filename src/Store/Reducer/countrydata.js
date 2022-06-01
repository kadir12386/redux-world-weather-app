const initialState = {
  countriesData: [],
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COUNTRIES":
      return {
        countriesData: [...action.payload],
      };

    default:
      return state;
  }
};
export default countriesReducer;
