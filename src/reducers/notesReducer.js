export default function notesReducer(
  state = {
    notes: [],
  },
  action
) {
  switch (action.type) {
    case "FETCH_NOTES":
      console.log("Action ---", action);
      console.log("State ----", state);
      return {
        ...state,
        notes: action.notes,
      };

    case "ADD_NOTE":
      console.log("Action ---", action);
      console.log("State ----", state);
      return {
        notes: [...state.notes, action.note],
      };

    case "DELETE_NOTE":
      let idx;
      console.log("Action ---", action);
      console.log("State ----", state);
      idx = state.notes.findIndex((note) => note.id === action.id);
      return {
        notes: [...state.notes.slice(0, idx), ...state.notes.slice(idx + 1)],
      };

    default:
      return state;
  }
}
