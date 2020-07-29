export default function queryReducer(state = "", action) {
  switch (action.type) {
    case "UPDATE_QUERY":
      return action.query;

    default:
      return state;
  }
}
