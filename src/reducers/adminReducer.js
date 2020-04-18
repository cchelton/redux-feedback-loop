const reducer = (state = [], action) => {
  if (action.type === "SET_ADMIN_FEEDBACK") {
    return [...action.payload];
  }
  return state;
};

export default reducer;
