import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";

import "./Navbar.css";

const Navbar = () => {
  const { recipes } = useContext(RecipeContext);
  return (
    <div className="narbarContainer">
      <h1 className="navbarTitle">Recipe App</h1>
      <p className="navbarDetail">
        Currently there are {recipes.length} recipes in here
      </p>
    </div>
  );
};

export default Navbar;
