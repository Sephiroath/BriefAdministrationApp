import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectmanagementComponent } from './projectmanagement/projectmanagement.component';
import { ProjectComponent } from './project/project.component';
import { EventsComponent } from '@app/projectmanagement/events/events.component';

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
    },
    {
      path: 'events',
      component: EventsComponent,
      data: {
        title: 'Eventos'
      }
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectmanagementRoutingModule { }
