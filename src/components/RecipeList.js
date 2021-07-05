import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import RecipeDetails from "./RecipeDetails";

import "./RecipeList.css";

const RecipeList = () => {
  const { recipes } = useContext(RecipeContext);
  return recipes.length ? (
    <div className="listContainer">
      <ul className="ulContainer">
        {recipes.map((recipe) => (
          <RecipeDetails recipe={recipe} key={recipe.id} />
        ))}
      </ul>
    </div>
  ) : (
    <div>There are no recipes in here</div>
  );
};

export default RecipeList;
