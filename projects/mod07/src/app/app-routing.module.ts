import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseTableComponent } from './use-table/use-table.component';

export const routes: Routes = [
  { path: 'Mat-Table', component: UseTableComponent, title: 'Mat-Table' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
