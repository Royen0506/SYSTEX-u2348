import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseTableComponent } from './use-table/use-table.component';
import { UseMatTableComponent } from './use-mat-table/use-mat-table.component';

export const routes: Routes = [
  { path: 'Mat-Table', component: UseTableComponent, title: 'Mat-Table' },
  {
    path: 'Use-Mat-Table',
    component: UseMatTableComponent,
    title: 'Use-Mat-Table',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
