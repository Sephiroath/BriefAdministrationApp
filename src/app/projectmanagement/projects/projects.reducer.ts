import { v4 as uuid } from 'uuid';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const PROJECTS_KEY = 'PROJECTMANAGEMENT.PROJECTS';

export enum ProjectsActionTypes {
    LISTPROJECTS = '[Projects] List',
    LISTPROJECTSUCCESS = '[Projects] ListSuccess',
    LISTPROJECTERROR = '[Projects] ListErrors',
    CREATEPROJECT = '[Projects] EditProject'
}

export class ActionProjectList implements Action {
    readonly type = ProjectsActionTypes.LISTPROJECTS;
    constructor(public payload: { filter: ProjectsFilter }) { }
}

export class ActionProjectListSuccess implements Action {
    readonly type = ProjectsActionTypes.LISTPROJECTSUCCESS;
    constructor(public payload: { projects: Project[] }) { }
}

export class ActionProjectListError implements Action {
    readonly type = ProjectsActionTypes.LISTPROJECTERROR;
    constructor(public payload: { error: HttpErrorResponse }) { }
}

export class ActionProjectsCreateProject implements Action {
    readonly type = ProjectsActionTypes.CREATEPROJECT;
    constructor(public payload: { projects: Project[], project: Project}) { }
}

export type ProjectsActions =
    | ActionProjectList
    | ActionProjectListSuccess
    | ActionProjectListError
    | ActionProjectsCreateProject;

export function ProjectsReducer(
    state: ProjectsState = initialState,
    action: ProjectsActions): ProjectsState {
    switch (action.type) {
        case ProjectsActionTypes.LISTPROJECTS:
            return {
                ...state,
                loading: true,
                projects: null,
                project: null,
                error: null,
                filter: action.payload.filter
            }
        case ProjectsActionTypes.LISTPROJECTERROR:
            return {
                ...state,
                loading: false,
                projects: null,
                project: null,
                error: action.payload.error,
                filter: null
            }
        case ProjectsActionTypes.LISTPROJECTSUCCESS:
            return {
                ...state,
                loading: false,
                projects: action.payload.projects,
                project: null,
                error: null,
                filter: null
            }
        case ProjectsActionTypes.CREATEPROJECT:
            return {
                ...state,
                loading: false,
                projects:  action.payload.projects,
                project:  action.payload.project,
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
    project?: Project;
    error?: HttpErrorResponse;
}
