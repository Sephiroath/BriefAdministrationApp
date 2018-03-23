import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectmanagementRoutingModule } from './projectmanagement-routing.module';
import { ProjectComponent } from './project/project.component';
import { ProjectmanagementComponent } from './projectmanagement/projectmanagement.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectmanagementRoutingModule
  ],
  declarations: [ProjectComponent, ProjectmanagementComponent]
})
export class ProjectmanagementModule { }
