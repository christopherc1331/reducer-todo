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
    default:
      return state;
  }
};
