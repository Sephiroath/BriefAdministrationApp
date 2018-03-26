import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { ActionProjectsCreateProject, selectorProjects, Project } from '../../projects.reducer';

@Component({
  selector: 'baconcha-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss']
})
export class CreateprojectComponent implements OnInit{
  private unsubscribe$: Subject<void> = new Subject<void>();
  projects: any;
  data: CreateProjectModel = new CreateProjectModel();
  initialized;
  formControl = new FormControl('', [
    Validators.required
  ]);
  constructor(public dialogRef: MatDialogRef<CreateprojectComponent>, public store: Store<any>) { }

  ngOnInit() {
    this.initialized = false;
    this.store
      .select(selectorProjects)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((projects: any) => {
        this.projects = projects;

        if (!this.initialized) {
          this.initialized = true;
          this.store.dispatch(
            new ActionProjectsCreateProject({ projects: projects.projects, project: projects.project })
          );
        }
      });
  }
  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Campo Requerido' :
        '';
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    // empty stuff
  }

  public confirmAdd() {
    // TODO: CALL REDUCER
  }
}

export class CreateProjectModel implements Project {
  ProjectId: number;
  Identifier: string;
  CurrentPhase: number;
  CurrentPhaseDescription: string;
  State: number;
  StateDescription: string;
  ProjectTitle: string;
  Priority: number;
  PriorityDescription: string;
  TotalHours: number;
  Management: string;
  UrlTfs: string;
  UrlSharePoint: string;
  ProductLine: number;
  ProductLineDescription: string;
  GcrmState: number;
  GcrmStateDescription: string;
  WorkOrder: string;
}