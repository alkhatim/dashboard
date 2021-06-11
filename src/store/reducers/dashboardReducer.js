const INIT_STATE = {
  operations: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "OPERATIONS_LOADED":
      return {
        ...state,
        operations: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
