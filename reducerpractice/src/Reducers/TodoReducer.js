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
    case "TOGGLE_COMPLETED":
      return state.map(toDo => {
        if (toDo.id === action.payload.id) {
          return { ...toDo, completed: !action.payload.completed };
        } else {
          return toDo;
        }
      });

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

    case "CLEAR_COMPLETED":
      let completedCount = 0;
      state.forEach(item => {
        if (item.completed === true) {
          completedCount++;
        }
      });
      if (completedCount > 0) {
        const newStateArray = state.filter(item => {
          return item.completed !== true;
        });
        return newStateArray;
      } else {
        return state;
      }

    default:
      return state;
  }
};
