import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailsComponent } from './cocktails.component';

const routes: Routes = [
  {
    path: '',
    component: CocktailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailsRoutingModule { }
