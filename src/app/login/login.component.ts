import { Component, OnInit } from '@angular/core';
import  { data } from  '../testing';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor() { }

  check(data1){
    data.map(e=>{
      if(e.email == data1.email && e.pwd == data1.pwd){
        localStorage.setItem('_id', e._id);
        console.log(e)
      }
    })
    
   }
}