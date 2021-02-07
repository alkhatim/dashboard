const INIT_STATE = {
  agencies: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "AGENCIES_LOADED":
      return {
        ...state,
        agencies: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
