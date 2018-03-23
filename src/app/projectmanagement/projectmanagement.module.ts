import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';

import { ProjectmanagementRoutingModule } from './projectmanagement-routing.module';
import { ProjectComponent } from './project/project.component';
import { ProjectmanagementComponent } from './projectmanagement/projectmanagement.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [
    SharedModule,
    ProjectmanagementRoutingModule
  ],  
  declarations: [ProjectComponent, ProjectmanagementComponent, EventsComponent]
})
export class ProjectmanagementModule { }
