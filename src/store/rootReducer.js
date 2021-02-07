import { combineReducers } from "redux";
import layout from "./reducers/layoutReducer";
import auth from "./reducers/authReducer";
import agencies from "./reducers/agenciesReducer";

const rootReducer = combineReducers({
  layout,
  auth,
  agencies,
});

export default rootReducer;
