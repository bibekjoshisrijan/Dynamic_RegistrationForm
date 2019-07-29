import { Component, OnInit } from '@angular/core';
import {Router } from  '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }
username:String;
password:String;

  ngOnInit() {

  }

    loginUser(){
     
  if(this.username === 'admin' && this.password === 'admin'){
    console.log('pass')
    this.route.navigate(['admin'])

  }
  console.log(this.username,this.password)
  console.log('fail')
}
}
