export type Ingredient = {
  name: string;
  quantity: string;
};

export type NutritionInfo = {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

export type RecipeDetail = {
  instructions: string[];
  nutritionInfo: NutritionInfo;
};

export type Recipe = {
  id: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  cookingTime: string;
  difficulty: 'easy' | 'medium' | 'hard';
  cuisine: string;
  imageUrl: string;
  details: RecipeDetail;
};
