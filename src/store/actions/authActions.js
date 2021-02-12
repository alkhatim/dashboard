import http from "../../services/http";
import messages from "../../services/messages";

export const login = (credentials) => async (dispatch) => {
  try {
    const { data } = await http.post("/auth/login", {
      userName: credentials.username,
      password: credentials.password,
    });

    if (credentials.rememberMe) localStorage.setItem("token", data.token);
    else localStorage.setItem("tempToken", data.token);

    http.defaultHeader();

    dispatch({
      type: "LOGGED_IN",
      payload: data,
    });
  } catch (error) {
    messages.error(error);
    dispatch({
      type: "LOGIN_FAILED",
    });
  }
};

export const loadUser = () => async (dispatch) => {
  localStorage.removeItem("tempToken");
  const token = localStorage.getItem("token");
  if (!token)
    dispatch({
      type: "LOGIN_FAILED",
    });
  try {
    const { data } = await http.get("/auth/my-account", {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({
      type: "LOGGED_IN",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILED",
    });
  }
};

export const loadProfile = async () => {
  try {
    const { data } = await http.get("/auth/my-account");
    return data;
  } catch (error) {
    messages.error(error);
  }
};

export const editProfile = async (profile) => {
  try {
    const { data } = await http.put("/auth/updatedetails", profile);
    return data.data;
  } catch (error) {
    messages.error(error);
  }
};

export const updatePassword = async (password) => {
  try {
    const { data } = await http.put("/auth/updatepassword", password);
    return data;
  } catch (error) {
    messages.error(error);
  }
};

export const logout = () => async (dispatch) => {
  localStorage.clear();
  dispatch({
    type: "LOGGED_OUT",
  });
};
