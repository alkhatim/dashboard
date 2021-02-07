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

export const getUsers = async (id) => {
  try {
    const { data } = await http.get(`/agencies/users/${id}`);
    return data.data;
  } catch (error) {
    messages.error(error);
    return [];
  }
};

export const getUser = async (id) => {
  try {
    const { data } = await http.get(`/users/${id}`);
    return data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const deleteUser = async (id) => {
  try {
    await http.delete(`/users/${id}`);
    return true;
  } catch (error) {
    messages.error(error);
  }
};
