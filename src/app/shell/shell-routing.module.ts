import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'cocktails',
        loadChildren: () => import('src/app/shell/modules/cocktails/cocktails.module')
          .then((m) => m.CocktailsModule),
      },
      {
        path: '**',
        redirectTo: 'cocktails',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {
}
