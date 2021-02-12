import http from "../../services/http";
import messages from "../../services/messages";

export const getAgencies = () => async (dispatch) => {
  try {
    const { data } = await http.get("/agencies");
    dispatch({ type: "AGENCIES_LOADED", payload: data.data });
  } catch (error) {
    messages.error(error);
  }
};

export const getAgency = async (id) => {
  try {
    const { data } = await http.get(`/agencies/${id}`);
    return data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const editAgency = async (id, agency) => {
  try {
    const { data } = await http.put(`/agencies/${id}`, agency);
    return data.data;
  } catch (error) {
    messages.error(error);
  }
};