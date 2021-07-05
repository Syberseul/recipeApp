import "./App.css";
import Navbar from "./components/Navbar";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeContextProvider from "./contexts/RecipeContext";

function App() {
  return (
    <div className="App">
      <RecipeContextProvider>
        <div className="container">
          <Navbar />
          <RecipeForm />
          <RecipeList />
        </div>
      </RecipeContextProvider>
    </div>
  );
}

export default App;
