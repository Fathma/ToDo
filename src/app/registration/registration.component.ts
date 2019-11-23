import { Component, OnInit } from '@angular/core';

import { UUID } from 'angular2-uuid';
import  { data } from  '../testing';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  uuidValue:string;
  constructor() { }

  ngOnInit() {
  }


  
  generateUUID(){
    this.uuidValue=UUID.UUID();
    return this.uuidValue;
  }
  
  onClickSubmit(data1){
    
    data1._id = this.generateUUID()
    data1.tasks = []
    data.push(data1)
    console.log(data)
   
  }

}
