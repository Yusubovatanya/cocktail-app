import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Cocktail } from '../../../../../shared/interfaces';

@Component({
  selector: 'app-cocktail-item',
  templateUrl: './cocktail-item.component.html',
  styleUrls: ['./cocktail-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailItemComponent {

  @Input() cocktail: Cocktail;

  constructor() {
  }

}
