import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Cocktail,
  CocktailCategory,
  CocktailFilterItem,
  CocktailFilters,
  CocktailsResponse,
} from '../../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {

  private readonly mainUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) {
  }

  getCocktailFilters(): Observable<string[]> {
    return this.http.get<CocktailFilters>(`${ this.mainUrl }/list.php?c=list`).pipe(
      map((response) => {
        return response.drinks.map(filter => filter.strCategory);
      }),
    );
  }

  getCocktailsByCategory(category: string): Observable<CocktailCategory> {
    return this.http.get<CocktailsResponse>(`${ this.mainUrl }/filter.php?c=${ category }`).pipe(
      map((response) => {
        return {... response, title: category };
      }),
    );
  }

}
