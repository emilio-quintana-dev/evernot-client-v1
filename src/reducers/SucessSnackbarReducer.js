export default function successSnackbarReducer(state = false, action) {
  switch (action.type) {
    case "DISPLAY_SUCCESS":
      console.log("STORE STATE ---", state);
      console.log("ACTION ---", action);
      return true;

    default:
      return state;
  }
}
