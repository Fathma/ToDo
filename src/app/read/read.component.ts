import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Task } from '../models/task.model';
import { AppState } from './../app.state';
import * as TaskActions from './../actions/task.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  // Section 1
  tasks: Observable<Task[]>;
  _id:string;

  // Section 2
  constructor(private store: Store<AppState>) { 
    this.tasks = store.select('task');
    this._id = localStorage.getItem('_id')
  }
  delTask(index) {
    
    this.store.dispatch(new TaskActions.RemoveTask(index) )
  }

  ngOnInit() {}

}
