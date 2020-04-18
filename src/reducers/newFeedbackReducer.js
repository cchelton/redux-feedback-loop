const initialState = {
  feeling: "",
  understanding: "",
  support: "",
  comments: "",
};

const reducer = (state = initialState, action) => {
  if (action.type === "MODIFY_NEW_FEEDBACK") {
    return {
      ...state,
      [action.payload.property]: action.payload.value,
    };
  }
  return state;
};

export default reducer;
