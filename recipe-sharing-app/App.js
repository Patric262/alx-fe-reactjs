import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import EditRecipeForm from './EditRecipeForm';
import Home from './Home'; // Displays all recipes

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/edit/:recipeId" element={<EditRecipeForm />} />
      </Routes>
    </Router>
  );
};

export default App;
