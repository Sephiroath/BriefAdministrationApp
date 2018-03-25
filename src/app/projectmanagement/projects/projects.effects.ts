import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { switchMap } from 'rxjs/operators/switchMap';
import { catchError } from 'rxjs/operators/catchError';

import { LocalStorageService } from '@app/core';

import {
    ActionProjectList,
    ActionProjectListSuccess,
    ActionProjectListError,
    PROJECTS_KEY,
    ProjectsActionTypes
  } from './projects.reducer';
  import { ProjectsService } from './projects.service';

@Injectable()
export class ProjectsEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService,
    private service: ProjectsService
  ) {}

  @Effect()
  retrieveStock(): Observable<Action> {
    return this.actions$.ofType(ProjectsActionTypes.LISTPROJECTS).pipe(
      tap((action: ActionProjectList) =>
        this.localStorageService.setItem(PROJECTS_KEY, {
          filter: action.payload.filter
        })
      ),
      distinctUntilChanged(),
      debounceTime(500),
      switchMap((action: ActionProjectList) =>
        this.service
          .retrieveProjects()
          .pipe(
            map(projects => new ActionProjectListSuccess({ projects })),
            catchError(error =>
              of(new ActionProjectListError({ error }))
            )
          )
      )
    );
  }
}