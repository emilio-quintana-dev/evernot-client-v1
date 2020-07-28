import { combineReducers } from "redux";
import notesReducer from "./notesReducer";
import sessionsReducer from "./sessionsReducer";
import usersReducer from "./usersReducer";
import queryReducer from "./queryReducer";
import successSnackbarReducer from "./SucessSnackbarReducer";

const rootReducer = combineReducers({
  notes: notesReducer,
  loggedInStatus: sessionsReducer,
  user: usersReducer,
  displaySuccessSnackbar: successSnackbarReducer,
  query: queryReducer,
});

export default rootReducer;
