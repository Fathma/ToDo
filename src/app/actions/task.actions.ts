// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Task } from '../models/task.model'

// Section 2
export const ADD_TASK       = '[TASK] Add'
export const REMOVE_TASK    = '[TASK] Remove'

// Section 3
export class AddTask implements Action {
    readonly type = ADD_TASK
    constructor(public payload: Task) {}
}

export class RemoveTask implements Action {
    readonly type = REMOVE_TASK

    constructor(public payload: number) {}
}

// Section 4
export type Actions = AddTask | RemoveTask