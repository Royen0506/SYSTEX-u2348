import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { SubjectResolver } from './subject/subject.resolver';

const routes: Routes = [
  { path: '', component: StudentComponent },
  {
    path: 'subject/:id',
    resolve: { subject: SubjectResolver },
    component: StudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
