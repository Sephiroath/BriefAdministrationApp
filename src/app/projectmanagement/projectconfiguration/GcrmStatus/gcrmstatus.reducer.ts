import { v4 as uuid } from 'uuid';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const GCRMSTATUS_KEY = 'PROJECTMANAGEMENT.GCRMSTATUS';

export enum GcrmStatusActionTypes {
    GETGCRMSTATUSES = '[GcrmStates] GetGcrmStatuses',
    GETGCRMSTATUSESUCCESS = '[GcrmStates] GetGcrmStatusesSuccess',
    GETGCRMSTATUSESERROR = '[GcrmStates] GetGcrmStatusesError'
}

export class ActionGcrmStatusGet implements Action {
    readonly type = GcrmStatusActionTypes.GETGCRMSTATUSES;
    constructor(public payload: { }) { }
}

export class ActionGcrmStatusGetSuccess implements Action {
    readonly type = GcrmStatusActionTypes.GETGCRMSTATUSES;
    constructor(public payload: { }) { }
}

export class ActionGcrmStatusGetError implements Action {
    readonly type = GcrmStatusActionTypes.GETGCRMSTATUSES;
    constructor(public payload: { }) { }
}

export type GcrmStatesActions =
    | ActionGcrmStatusGet
    | ActionGcrmStatusGetSuccess
    | ActionGcrmStatusGetError;

export function GcrmStateReducer(){
    
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
}
