const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          task: action.payload.task,
          checked: false,
          readOnly: true,
          edit: true,
        },
      ];
    case "DELETE":
      return state.filter((i) => i.id !== action.payload);

    case "COMPLETE":
      return state.map((i) =>
        i.id === action.payload ? { ...i, checked: !i.checked } : i
      );
    case "EDIT":
      return state.map((i) => {
        if (i.id === action.payload.id) {
          if (i.edit) {
            return { ...i, readOnly: !i.readOnly, edit: !i.edit };
          } else {
            return {
              ...i,
              readOnly: !i.readOnly,
              edit: !i.edit,
              task: action.payload.task,
            };
          }
        } else {
          return i;
        }
      });
    default:
      return state;
  }
};

export default todoReducer;

export const addCreator = (task) => ({
  type: "ADD",
  payload: {
    task: task,
  },
});

export const deleteCreator = (id) => ({
  type: "DELETE",
  payload: id,
});

export const checkedCreator = (id) => ({
  type: "COMPLETE",
  payload: id,
});

export const editCreator = (id, task) => ({
  type: "EDIT",
  payload: {
    id: id,
    task: task,
  },
});
