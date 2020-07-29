export default function successSnackbarReducer(state = false, action) {
  switch (action.type) {
    case "DISPLAY_SUCCESS":
      return true;

    default:
      return state;
  }
}
