export default function simpleReducer(
  state = {
    notes: [],
    loggedInStatus: "NOT_LOGGED_IN",
    user: {},
  },
  action
) {
  switch (action.type) {
    case "LOGIN_USER":
      console.log("Action ---", action);
      console.log("State ----", state);
      return {
        ...state,
        loggedInStatus: "LOGGED_IN",
        user: action.user,
      };

    case "LOGOUT_USER":
      console.log("Action ---", action);
      console.log("State ----", state);
      return {
        ...state,
        loggedInStatus: "NOT_LOGGED_IN",
        user: {},
      };

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
        ...state,
        notes: [...state.notes, action.note],
      };

    case "DELETE_NOTE":
      let idx;
      console.log("Action ---", action);
      console.log("State ----", state);
      idx = state.notes.findIndex((note) => note.id === action.id);
      return {
        ...state,
        notes: [...state.notes.slice(0, idx), ...state.notes.slice(idx + 1)],
      };

    case "MARK_AS_DONE":
      console.log("Action ---", action);
      console.log("State ----", state);
      let updatedNotes = state.notes.map((note) => {
        if (note.id === action.note.id) {
          const updateDone = !note.done;
          return {
            ...note,
            done: updateDone,
          };
        } else {
          return note;
        }
      });

      return {
        ...state,
        notes: updatedNotes,
      };

    case "EDIT_NOTE":
      console.log("Action ---", action);
      console.log("State ----", state);
      let newNotes = state.notes.map((note) => {
        if (note.id === action.note.id) {
          const newTitle = action.note.title;
          const newContent = action.note.description;
          return {
            ...note,
            title: newTitle,
            description: newContent,
          };
        } else {
          return note;
        }
      });

      return {
        ...state,
        notes: newNotes,
      };

    default:
      return state;
  }
}
