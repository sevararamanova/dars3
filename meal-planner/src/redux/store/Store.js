import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from '../../redux/recipes/recipesSlice';
import mealPlanReducer from '../../redux/mealPlan/MealPlanSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    mealPlan: mealPlanReducer,
  },
});
