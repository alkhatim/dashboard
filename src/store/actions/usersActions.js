import http from "../../services/http";
import messages from "../../services/messages";

export const getUsers = async () => {
  try {
    const { data } = await http.get("/users");
    return data;
  } catch (error) {
    messages.error(error);
    return [];
  }
};
