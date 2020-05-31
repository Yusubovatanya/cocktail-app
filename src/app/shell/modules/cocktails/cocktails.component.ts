import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  private currentCategories: string[];
  private countCategory = 0;

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
          this.updateFilters(filters);

          this.cd.detectChanges();
        },
      );
  }

  updateFilters(categories: string[]) {
    this.currentCategories = categories;
    this.countCategory = 0;
    this.cocktailCategories = [];

    this.getCocktailCategory(this.currentCategories[this.countCategory]);
  }

  onScroll() {
    this.countCategory++;
    const addedCategory = this.currentCategories[this.countCategory];

    if (addedCategory) {
      this.getCocktailCategory(addedCategory);
    }
  }

  private getCocktailCategory(filter: string): void {
    this.cocktailService.getCocktailsByCategory(filter)
      .pipe(
        untilDestroyed(this),
      )
      .subscribe((category) => {
          this.cocktailCategories = this.cocktailCategories.concat(category);

          this.cd.detectChanges();
        },
      );
  }

}
