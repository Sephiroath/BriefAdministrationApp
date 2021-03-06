import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';

import { ProjectmanagementRoutingModule } from './projectmanagement-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsReducer } from './projects/projects.reducer';
import { ProjectsEffects } from './projects/projects.effects';
import { ProjectsService } from './projects/projects.service';
import { ProjectmanagementComponent } from './projectmanagement/projectmanagement.component';
import { EventsComponent } from './events/events.component';
import { CreateprojectComponent } from './projects/dialog/createproject/createproject.component';
import { EditprojectComponent } from './projects/dialog/editproject/editproject.component';
import { ProjectconfigurationComponent } from './projectconfiguration/projectconfiguration.component';

@NgModule({
  imports: [
    SharedModule,
    ProjectmanagementRoutingModule,
    StoreModule.forFeature('projectmanagement', {
      projects: ProjectsReducer
    }),
    EffectsModule.forFeature([ProjectsEffects])
  ],
  entryComponents: [CreateprojectComponent, EditprojectComponent],
  declarations: [ProjectsComponent, ProjectmanagementComponent, EventsComponent, CreateprojectComponent, EditprojectComponent, 
    ProjectconfigurationComponent],
  providers: [ProjectsService]
})
export class ProjectmanagementModule { }
