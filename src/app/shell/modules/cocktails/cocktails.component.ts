import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { CocktailService } from '../../../core/services';
import { CocktailCategory } from '../../../shared/interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss'],
})
export class CocktailsComponent implements OnInit {

  filters: string[];
  cocktailCategories: CocktailCategory[] = [];

  constructor(
    private cocktailService: CocktailService,
    private cd: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    this.getCocktailFilters();
  }

  getCocktailFilters(): void {
    this.cocktailService.getCocktailFilters()
      .pipe(
        untilDestroyed(this),
      )
      .subscribe((filters) => {
          this.filters = filters;
          this.updateFilters(this.filters);

          this.cd.detectChanges();
        },
      );
  }

  updateFilters(categories: string[]) {
    const filters$: Observable<CocktailCategory>[] = [];

    categories.forEach((category) => {
      filters$.push(this.getCocktailCategory(category));
    });

    this.updateCocktailsList(filters$);
  }

  private updateCocktailsList(filters$: Observable<CocktailCategory>[]): void {
    forkJoin(...filters$)
      .pipe(
        untilDestroyed(this),
      )
      .subscribe((categories) => {
          this.cocktailCategories = [];
          this.cocktailCategories = this.cocktailCategories.concat(categories);

          this.cd.detectChanges();
        },
      );
  }

  private getCocktailCategory(category: string): Observable<CocktailCategory> {
    return this.cocktailService.getCocktailsByCategory(category);
  }

}
