import React from 'react';
import { useSelector } from 'react-redux';
import RecipesTable from '../../components/table/RecipesTable';

const AddedRecipes = () => {
  const addedRecipes = useSelector((state) => state.mealPlan.items);

  return <RecipesTable recipes={addedRecipes} />;
};

export default AddedRecipes;
