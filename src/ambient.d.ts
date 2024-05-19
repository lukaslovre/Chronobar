type MenuItemType = {
  id: string;
  name: string;
  description: string;
  category: string;
  sub_category: string;
  sub_sub_category: string;
  price: number;
  currency: string;
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  };
  allergens: string[];
  popularity_score_out_of_5: number;
  image_url: string;
  availability: string;
  last_updated: Date;
  customization_options: {
    name: string;
    additional_cost: number;
  }[];
};
