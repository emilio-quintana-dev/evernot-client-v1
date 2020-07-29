import { combineReducers } from "redux";
import notesReducer from "./notesReducer";
import usersReducer from "./usersReducer";
import queryReducer from "./queryReducer";
import successSnackbarReducer from "./SucessSnackbarReducer";

const rootReducer = combineReducers({
  notes: notesReducer,
  user: usersReducer,
  displaySuccessSnackbar: successSnackbarReducer,
  query: queryReducer,
});

export default rootReducer;
