import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CocktailCategory } from '../../../../../shared/interfaces';

@Component({
  selector: 'app-cocktail-category',
  templateUrl: './cocktail-category.component.html',
  styleUrls: ['./cocktail-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailCategoryComponent {

  @Input() readonly category: CocktailCategory;

  constructor() {
  }

}
