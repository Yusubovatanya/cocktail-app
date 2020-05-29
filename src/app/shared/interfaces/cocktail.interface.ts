export interface Cocktail {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface CocktailsResponse {
  drinks: Cocktail[];
}

export interface CocktailCategory {
  drinks: Cocktail[];
  title: string;
}
