import { v4 as uuid } from 'uuid';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const PROJECTS_KEY = 'PROJECTMANAGEMENT.PROJECTS';

export enum ProjectsActionTypes {
    LISTPROJECTS = '[Projects] List',
    LISTPROJECSUCCESS = '[Projects] ListSuccess',
    LISTPROJECTERROR = '[Projects] ListErrors'
}

export class ActionProjectList implements Action {
    readonly type = ProjectsActionTypes.LISTPROJECTS;
    constructor(public payload: { filter: ProjectsFilter }) { }
}

export class ActionProjectListSuccess implements Action {
    readonly type = ProjectsActionTypes.LISTPROJECSUCCESS;
    constructor(public payload: { projects: Project[] }) { }
}

export class ActionProjectListError implements Action {
    readonly type = ProjectsActionTypes.LISTPROJECTERROR;
    constructor(public payload: { error: HttpErrorResponse }) { }
}

export type ProjectsActions =
    | ActionProjectList
    | ActionProjectListSuccess
    | ActionProjectListError;

export function ProjectsReducer(
    state: ProjectsState = initialState,
    action: ProjectsActions): ProjectsState {
    switch (action.type) {
        case ProjectsActionTypes.LISTPROJECTS:
            return {
                ...state,
                loading: true,
                projects: null,
                error: null,
                filter: action.payload.filter
            }
        case ProjectsActionTypes.LISTPROJECTERROR:
            return {
                ...state,
                loading: false,
                projects: null,
                error: action.payload.error,
                filter: null
            }
        case ProjectsActionTypes.LISTPROJECSUCCESS:
            return {
                ...state,
                loading: false,
                projects: action.payload.projects,
                error: null,
                filter: null
            }
    }
}

export const initialState: ProjectsState = {
    filter: 'ALL',
    loading: false
};

export const selectorProjects = state => state.projectmanagement.projects;

export interface Project {
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

export type ProjectsFilter = 'ALL';

export interface ProjectsState {
    filter: ProjectsFilter;
    loading: boolean;
    projects?: Project[];
    error?: HttpErrorResponse;
}
