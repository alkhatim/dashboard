import http from "../../services/http";
import messages from "../../services/messages";

export const getAgencies = async () => {
  try {
    const { data } = await http.get("/agencies");
    return data.data;
  } catch (error) {
    messages.error(error);
    return [];
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

export const getAgencyUsers = async (id) => {
  try {
    const { data } = await http.get(`/agencies/users/${id}`);
    return data.data;
  } catch (error) {
    messages.error(error);
    return [];
  }
};
