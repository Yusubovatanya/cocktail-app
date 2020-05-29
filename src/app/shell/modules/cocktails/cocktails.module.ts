import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { CocktailsRoutingModule } from './cocktails-routing.module';
import { CocktailsComponent } from './cocktails.component';
import { CocktailCategoryComponent, CocktailItemComponent, FilterCategoryComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    CocktailsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    CocktailsComponent,
    FilterCategoryComponent,
    CocktailItemComponent,
    CocktailCategoryComponent,
  ],
})
export class CocktailsModule { }
