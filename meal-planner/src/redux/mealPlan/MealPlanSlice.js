import { createSlice } from '@reduxjs/toolkit';


const mealPlanSlice = createSlice({
  name: 'mealPlan',
  initialState: [],
  reducers: {
    addRecipeToMealPlan(state, action) {
      state.push(action.payload);
    },
    removeRecipeFromMealPlan(state, action) {
      return state.filter(recipe => recipe.id !== action.payload.id);
    },
  },
});

export const { addRecipeToMealPlan, removeRecipeFromMealPlan } = mealPlanSlice.actions;
export default mealPlanSlice.reducer;
