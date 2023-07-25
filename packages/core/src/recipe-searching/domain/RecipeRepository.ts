import { Recipe } from './Recipe';

export interface RecipeRepository {
  add(recipe: Recipe): Promise<void>;
  update(recipe: Recipe): Promise<void>;
  delete(recipeId: string): Promise<void>;
  get(recipeId: string): Promise<Recipe>;
  search(query: string): Promise<Recipe[]>;
}
