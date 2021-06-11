import { combineReducers } from "redux";
import layout from "./reducers/layoutReducer";
import auth from "./reducers/authReducer";
import dashboard from "./reducers/dashboardReducer";
import agencies from "./reducers/agenciesReducer";

const rootReducer = combineReducers({
  layout,
  auth,
  dashboard,
  agencies,
});

export default rootReducer;
