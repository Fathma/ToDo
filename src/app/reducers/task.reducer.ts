import { Action } from '@ngrx/store'
import { Task } from '../models/task.model'
import * as TutorialActions from '../actions/task.actions'

// Section 1
const initialState: Task = {
    userId:null,
    title: null,
    description: null,
    status: null
}

export function reducer(state: Task[] = [initialState], action: TutorialActions.Actions) {
    switch(action.type) {
        case TutorialActions.ADD_TASK:
            return [...state, action.payload];
        
        // Add this case:
        case TutorialActions.REMOVE_TASK:
            state.splice(action.payload, 1)
            return state;
            
        default:
            return state;
    }
}