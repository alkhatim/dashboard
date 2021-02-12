import axios from "axios";
import messages from "../services/messages";

const token =
  localStorage.getItem("token") || localStorage.getItem("tempToken");

const http = axios.create({
  headers: { Authorization: `Bearer ${token}` },
});

const defaultHeader = () => {
  http.interceptors.request.use(
    function (config) {
      const token =
        localStorage.getItem("token") || localStorage.getItem("tempToken");
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    function (error) {
      throw error;
    }
  );
};

export default {
  defaultHeader,
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
};
