import { combineReducers } from "redux";
import converterSlice from "./converterSlice";
import ratesSlice from "./ratesSlice";

const rootReducer = combineReducers({
  converter: converterSlice,
  rates: ratesSlice,
});

export default rootReducer;
