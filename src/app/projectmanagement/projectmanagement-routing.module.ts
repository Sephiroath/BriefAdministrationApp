import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectmanagementComponent } from './projectmanagement/projectmanagement.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectmanagementComponent,
    children: [{
      path: '',
      redirectTo: 'project',
      pathMatch: 'full'
    },
    {
      path: 'project',
      component: ProjectComponent,
      data: {
        title: 'Proyectos'
      }
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectmanagementRoutingModule { }
