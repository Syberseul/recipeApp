import React, { useContext, useState } from "react";
import { RecipeContext } from "../contexts/RecipeContext";

import "./RecipeForm.css";

const RecipeForm = () => {
  const { dispatch } = useContext(RecipeContext);

  const [title, setTitle] = useState("");
  const [ingrediants, setIngrediants] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_RECIPE", recipe: { title, ingrediants } });
    setTitle("");
    setIngrediants("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="titleInput"
        type="text"
        placeholder="recipe title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
        required
      />

      <textarea
        className="ingreInput"
        type="text"
        placeholder="recipe ingrediants"
        value={ingrediants}
        onChange={({ target }) => setIngrediants(target.value)}
        required
      />

      <input className="addButton" type="submit" value="add recipe" />
    </form>
  );
};

export default RecipeForm;
