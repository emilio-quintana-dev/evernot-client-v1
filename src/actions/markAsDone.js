export const markAsDone = (note) => {
  return {
    type: "MARK_AS_DONE",
    note,
  };
};
