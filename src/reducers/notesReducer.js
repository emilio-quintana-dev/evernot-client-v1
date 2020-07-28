export default function notesReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_NOTES":
      console.log("STORE STATE ---", state);
      console.log("ACTION ---", action);
      return action.notes;

    case "ADD_NOTE":
      console.log("STORE STATE ---", state);
      console.log("ACTION ---", action);
      return [...state, action.note];

    case "DELETE_NOTE":
      console.log("STORE STATE ---", state);
      console.log("ACTION ---", action);
      let idx;
      idx = state.findIndex((note) => note.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "MARK_AS_DONE":
      console.log("STORE STATE ---", state);
      console.log("ACTION ---", action);
      let updatedNotes = state.map((note) => {
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

      return updatedNotes;

    case "EDIT_NOTE":
      console.log("STORE STATE ---", state);
      console.log("ACTION ---", action);
      let newNotes = state.map((note) => {
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

      return newNotes;

    default:
      return state;
  }
}
