import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcComponent } from './abc/abc.component';
import { ProjectComponent } from './project/project.component';
import { TeacherComponent } from './teacher.component';

const routes: Routes = [{
  path: '', component: TeacherComponent,
  children: [
    { path: 'project', component: ProjectComponent, title:'專案' },
    { path: 'abc', component: AbcComponent, title:'abc' }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
