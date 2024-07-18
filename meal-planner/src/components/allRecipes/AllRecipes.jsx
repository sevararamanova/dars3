// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../../redux/recipes/recipesSlice';
import RecipesTable from '../../components/table/RecipesTable';

const AllRecipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.items);
  const status = useSelector((state) => state.recipes.status);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error loading recipes</div>;
  }

  return <RecipesTable recipes={recipes} />;
};

export default AllRecipes;
