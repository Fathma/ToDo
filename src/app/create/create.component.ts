import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Task } from '../models/task.model'
import * as TaskActions from '../actions/task.actions';
import { Observable } from 'rxjs';
import  { data } from  '../testing';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  error: boolean
  constructor(private store: Store<AppState>) {
    this.error = this.sdf()
  }
  sdf(){
    let userId = localStorage.getItem('_id')
    let user =data.filter(e=>(userId == e._id))
    if(user.length>0){
      return true
    }else{
      return false
    }
  }

  addTask(title, description, status) {
    let userId = localStorage.getItem('_id')
    this.store.dispatch(new TaskActions.AddTask({userId, title, description, status}) )
  }

  ngOnInit() {
  }

}

