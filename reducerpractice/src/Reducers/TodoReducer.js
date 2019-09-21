export const initialState = [
  {
    item: "Fold Clothes",
    completed: false,
    id: 1
  },
  {
    item: "Clean Dishes",
    completed: false,
    id: 2
  },
  {
    item: "Wash Blankets",
    completed: false,
    id: 3
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          id: state.length + 1,
          completed: false
        }
      ];
    case "EDIT_TODO":
      return state.map(toDo => {
        if (toDo.id === action.id) {
          return { ...toDo, item: action.payload };
        } else {
          return toDo;
        }
      });

    default:
      return state;
  }
};
