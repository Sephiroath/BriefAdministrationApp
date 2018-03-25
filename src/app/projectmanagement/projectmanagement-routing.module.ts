import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectmanagementComponent } from './projectmanagement/projectmanagement.component';
import { ProjectsComponent } from './projects/projects.component';
import { EventsComponent } from '@app/projectmanagement/events/events.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectmanagementComponent,
    children: [{
      path: '',
      redirectTo: 'projects',
      pathMatch: 'full'
    },
    {
      path: 'projects',
      component: ProjectsComponent,
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
