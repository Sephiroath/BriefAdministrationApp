import { v4 as uuid } from 'uuid';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { GcrmState } from '../Models/ProjectConfigurationModels';

export const GCRMSTATUS_KEY = 'PROJECTMANAGEMENT.GCRMSTATUS';

export enum GcrmStatusActionTypes {
    GETGCRMSTATUSES = '[GcrmStates] GetGcrmStatuses',
    GETGCRMSTATUSESUCCESS = '[GcrmStates] GetGcrmStatusesSuccess',
    GETGCRMSTATUSESERROR = '[GcrmStates] GetGcrmStatusesError'
}

export class ActionGcrmStatusGet implements Action {
    readonly type = GcrmStatusActionTypes.GETGCRMSTATUSES;
    constructor(public payload: {}) { }
}

export class ActionGcrmStatusGetSuccess implements Action {
    readonly type = GcrmStatusActionTypes.GETGCRMSTATUSESUCCESS;
    constructor(public payload: { gcrmstatuses: GcrmState[] }) { }
}

export class ActionGcrmStatusGetError implements Action {
    readonly type = GcrmStatusActionTypes.GETGCRMSTATUSESERROR;
    constructor(public payload: { error: HttpErrorResponse }) { }
}

export type GcrmStatesActions =
    | ActionGcrmStatusGet
    | ActionGcrmStatusGetSuccess
    | ActionGcrmStatusGetError;

export function GcrmStateReducer(
    state: GcrmStatusState = initialState,
    action: GcrmStatesActions): GcrmStatusState {
    switch (action.type) {
        case GcrmStatusActionTypes.GETGCRMSTATUSES:
            return {
                ...state,
                loading: true,
                error: null,
                gcrmStates: null
            }
        case GcrmStatusActionTypes.GETGCRMSTATUSESUCCESS:
            return {
                ...state,
                loading: true,
                error: null,
                gcrmStates: action.payload.gcrmstatuses
            }
        case GcrmStatusActionTypes.GETGCRMSTATUSESERROR:
            return {
                ...state,
                loading: true,
                error: action.payload.error,
                gcrmStates: null
            }
    }
}

export const initialState: GcrmStatusState = {
    loading: true,
};

export const selectorProjects = state => state.projectmanagement.gcrmstatus;

export interface GcrmState {
    GcrmStateId: number,
    description: string
}


export interface GcrmStatusState {
    loading: boolean,
    gcrmStates?: GcrmState[]
    error?: HttpErrorResponse
}
