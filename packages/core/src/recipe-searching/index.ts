// src/recipe/index.ts

import { RecipeService } from './application/RecipeService';
import { RecipeRepositoryImpl } from './infrastructure/RecipeRepositoryImpl';

// Initialize your repository
const recipeRepository = new RecipeRepositoryImpl();

// Initialize your service with the repository
const recipeService = new RecipeService(recipeRepository);

export { recipeService };
