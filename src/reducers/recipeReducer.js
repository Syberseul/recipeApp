import { v1 as uuidv1 } from "uuid";

export const recipeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [
        ...state,
        {
          title: action.recipe.title,
          ingrediants: action.recipe.ingrediants,
          id: uuidv1(),
        },
      ];

    case "REMOVE_RECIPE":
      return state.filter((recipe) => recipe.id !== action.id);

    default:
      return state;
  }
};
