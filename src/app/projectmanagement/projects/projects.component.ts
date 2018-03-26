import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';

import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import { ActionProjectList, selectorProjects, Project } from './projects.reducer';
import { CreateprojectComponent } from './dialog/createproject/createproject.component';

@Component({
  selector: 'baconcha-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy, AfterViewInit {
  private unsubscribe$: Subject<void> = new Subject<void>();

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  projects: any;
  initialized;
  displayedColumns = ['ProjectId', 'Identifier', 'ProjectTitle', 'CurrentPhaseDescription', 'StateDescription', 'PriorityDescription',
    'GcrmStateDescription', 'actions'];
  dataSource: MatTableDataSource<Project[]>;

  @ViewChild(MatSort) sort: MatSort;

  // project = new this.project

  constructor(public store: Store<any>, public snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
    this.initialized = false;
    this.store
      .select(selectorProjects)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((projects: any) => {
        this.projects = projects;
        this.dataSource = new MatTableDataSource(projects.projects);

        if (!this.initialized) {
          this.initialized = true;
          this.store.dispatch(
            new ActionProjectList({ filter: 'ALL' })
          );
        }
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onCreateProject() {
    const dialogRef = this.dialog.open(CreateprojectComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.showNotification('Proyecto creado');
      }
    });
  }

  onEditProject(id: number) {
    return null;
  }

  private showNotification(message: string, action?: string) {
    return this.snackBar.open(message, action, {
      duration: 3000
    });
  }

}
