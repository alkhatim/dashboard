import http from "../../services/http";
import messages from "../../services/messages";

export const getOperations = () => async (dispatch) => {
  try {
    const { data } = await http.get("/discharges/agencies");
    dispatch({ type: "OPERATIONS_LOADED", payload: data.data });
  } catch (error) {
    messages.error(error);
  }
};
