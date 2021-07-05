import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";

import "./RecipeDetails.css";

const RecipeDetails = ({ recipe }) => {
  const { dispatch } = useContext(RecipeContext);

  return (
    <li
      className="recipeItem"
      onClick={() => dispatch({ type: "REMOVE_RECIPE", id: recipe.id })}
    >
      <div className="recipeTitle">{recipe.title}</div>
      <div className="recipeIngre">{recipe.ingrediants}</div>
    </li>
  );
};

export default RecipeDetails;
